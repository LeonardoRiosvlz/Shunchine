import { Injectable, Logger, Inject } from '@nestjs/common';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { ITranscode, ITranscodeOption } from '../interfaces/ITranscode';
import * as Ffmpeg from 'fluent-ffmpeg';
import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { TranscoderErrors } from '../errors/transcoder.errors';

import { join } from 'path';
import { TranscodeFolderService } from './transcode-folder.service';
import { Resolution } from '../entities/schemas/transcode-options.schema';



@Injectable()
export class AppTranscodeService implements ITranscode {
  private _ffmpeg: Ffmpeg.FfmpegCommand;


  constructor(
    private readonly _config: AppConfigService,
    private readonly _folderService: TranscodeFolderService) {
    this.initFfmpgLib()
  }

  private initFfmpgLib() {
    this._ffmpeg = Ffmpeg(); 

    if (this._config.ffmpeg.ffpmgPath) {
      this._ffmpeg.setFfmpegPath(this._config.ffmpeg.ffpmgPath);
    }

    if (this._config.ffmpeg.ffprobePath) {
      this._ffmpeg.setFfprobePath(this._config.ffmpeg.ffprobePath);
    }

    if (this._config.ffmpeg.flvToolPath) {
      this._ffmpeg.setFlvtoolPath(this._config.ffmpeg.flvToolPath);
    }
  }

  async transcode(url: string, folder: string, options: ITranscodeOption): Promise<Result<void>> {
    try {
      await this._folderService.cleanMediaFolder(url)
      await this._folderService.createDir(folder)

      //const ffmpgOpts = await this.extractFfmpegOptions(url, folder);
      //options.ffmpgOpts = union(options.ffmpgOpts, ffmpgOpts);
      const outFile = join(this._folderService.getMediaFolder(folder), 'index.m3u8')

      return new Promise((resolve, reject) => {
        this._ffmpeg
          .addInput(url)
          .outputOptions([
            ...options.ffmpgOpts,
            `-s ${options.resolution ?? Resolution.HD}`,
          ])
          .on('start', function (commandLine) {
            Logger.debug(`Exec command:::  ${commandLine}`, AppTranscodeService.name);
          })
          .on('progress', function (progress) {
            Logger.log(`Processing file::: ${url} .....'${Math.abs(progress.percent)} % done.`, AppTranscodeService.name);
          })

          .on('end', () => {
            Logger.debug(`Transcoding File::: ${url}, OK`, AppTranscodeService.name);
            this.initFfmpgLib()
            resolve(Result.Ok());
          })
          .on('error', err => {
            Logger.error(`Error in file::: ${url}, [ERROR]::: ${err.toString()}`, AppTranscodeService.name);
            this.initFfmpgLib();
            reject(Result.Fail(new AppError.UnexpectedError(err)));
          })
          .output(outFile).run()
      });

    } catch (err) {
      this.initFfmpgLib()
      return Result.Fail(new AppError.UnexpectedError(err))
    }
  }


  async mediaInfo(input: string): Promise<Result<Ffmpeg.FfprobeData>> {
    return new Promise((resolve, reject) => {
      this._ffmpeg
        .addInput(input).ffprobe((err: any, data: Ffmpeg.FfprobeData) => {

          if (err) {
            reject(Result.Fail(new TranscoderErrors.MediaInfoError(input)));
          }
          resolve(Result.Ok(data));
        });
    });
  }


  async extractFfmpegOptions(inputPath: string, folder: string): Promise<Array<string>> {
    const options: Array<string> = new Array<string>();
    const outPath = this._folderService.getMediaFolder(folder)

    try {
      const ffProbeResultOrErr = await this.mediaInfo(inputPath);

      if (ffProbeResultOrErr.isSuccess) {
        const ffProbeResult = ffProbeResultOrErr.unwrap();
        const { streams } = ffProbeResult;
        if (streams) {
          const videoStream = streams.filter((stream => stream.codec_type === 'video'));
          const audioStream = streams.filter((stream => stream.codec_type === 'audio'));
          const subtitleStream = streams.filter((stream => stream.codec_type === 'subtitle'));
          options.push(...this.extractStreamOption(videoStream, outPath));
          options.push(...this.extractStreamOption(audioStream, outPath));
          // options.push(...this.extractStreamOption(subtitleStream, outPath));
          //options.push(`-master_pl_name master.m3u8`);
        }
      }

      return options;
    } catch {
      return options;
    }

  }


  private extractStreamOption(stream: Array<Ffmpeg.FfprobeStream>, outPath: string): Array<string> {
    const options: Array<string> = new Array<string>();

    for (let i = 0; i < stream.length; i++) {
      switch (stream[i].codec_type) {
        case 'audio':
          options.push(`-map 0:a:${i}?`);
          options.push(`-c:a aac`);
          options.push(`-f hls`);
          options.push(`-hls_time 10`);
          options.push(`-hls_list_size 0`);
          options.push(`-segment_list AUDIO${i}`);
          options.push(join(outPath, `audio${i}.m3u8`));
          break;

        case 'subtitle':
          options.push(`-map 0:s:${i}?`);
          break;
        default: {
          options.push(`-map 0:v:${i}?`);
          options.push(`-c:v libx264`);
          options.push(`-f hls`);
          options.push(`-hls_segment_size 1000000`);
          options.push(`-start_number 0`);
          options.push(`-g 60`);
          options.push(`-max_muxing_queue_size 1024`);
          options.push(`-hls_time 1`);
          options.push(`-hls_list_size 0`);
        }
      }
    }
    return options;

  }


}
