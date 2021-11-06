import { Injectable, Logger, Inject } from '@nestjs/common';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { join } from 'path';
import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { remove, ensureDir, readdir, createReadStream } from 'fs-extra';
import { TranscoderEntity } from '../entities/transcoder.entity';
import { IUploadResult } from 'src/shared/modules/files/interfaces/ICloudFileService';
import { AWSCloudService } from 'src/shared/modules/files/services/aws-cloud.service';



@Injectable()
export class TranscodeFolderService {

  constructor(private readonly _configService: AppConfigService,
    private readonly _awsCloudService: AWSCloudService) {
  }


  getMediaFolder(folder: string): string {
    return join(this._configService.ffmpeg.outPath, 'outputs', folder);
  }


  async cleanMediaFolder(folder: string): Promise<Result<void>> {
    try {
      await remove(this.getMediaFolder(folder));
      return Result.Ok();

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }
  }


  async createDir(folder: string): Promise<Result<void>> {
    try {

      await ensureDir(this.getMediaFolder(folder));
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }
  }


  async putInAmazon(transcode: TranscoderEntity): Promise<Result<string>> {
    try {

      const folderPath = this.getMediaFolder(transcode.folder)
      const filenames: Array<string> = await readdir(folderPath);

      const promises: Array<Promise<Result<IUploadResult>>> = [];

      for (const fname of filenames) {
        promises.push(this._awsCloudService.upload(fname,
          await createReadStream(join(folderPath, fname)),
          { path: transcode.folder, prefix: false })
        );
      }
      const resultOrErrs: Array<Result<IUploadResult>> = await Promise.all(promises);


      let combined: Result<unknown> = null
      for (const rOrErr of resultOrErrs) {
        combined = combined ? combined.and(rOrErr) : rOrErr
      }

      if (combined && combined.isFailure) {
        return Result.Fail(combined.unwrapError())
      }

      const result: Array<IUploadResult> = resultOrErrs.map(x => x.unwrap())
      const url = result.find((r => new RegExp('index.m3u8', 'i').test(r?.url))).url
      return Result.Ok(url)
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }

  }


}
