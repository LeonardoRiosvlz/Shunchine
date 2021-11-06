import { Injectable, Inject } from '@nestjs/common';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { ITranscodeOption } from '../interfaces/ITranscode';

import { TranscoderErrors } from '../errors/transcoder.errors';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';
import { TranscoderEntity, TranscodeStatus } from '../entities/transcoder.entity';
import { AppTranscodeService } from './app-transcoder.service';
import { GetOneTranscoderQuery } from '../cqrs/queries/impl/get-one-transcoder.query';
import { UpdateTranscoderCommand } from '../cqrs/commands/impl/update-transcoder.command';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { OnTranscodeErrorEvent } from '../cqrs/events/impl/on-transcode-error-event';
import { OnTranscodeSuccessEvent } from '../cqrs/events/impl/on-transcode-success-event';
import { FfmpgOptionEntity } from 'src/modules/ffmpg-option/entities/ffmpg-option.entity';
import { GetAllFfmpgOptionQuery } from 'src/modules/ffmpg-option/cqrs/queries/impl/get-all-ffmpg-option.query';
import { ExtractFfmpgOptionsQuery } from 'src/modules/ffmpg-template/cqrs/queries/impl/extract-ffmpg-options.query';
import { ITranscodeJob, TranscodeJobOptions } from '../interfaces/ITranscodeJob';




@Injectable()
export class PreTranscodeService {


  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
    @InjectQueue('transcode') private _transcoderQueue: Queue,
    private readonly _appTranscodeService: AppTranscodeService) {
  }


  async processEntity(entityId: string, jobOptions: TranscodeJobOptions): Promise<Result<void>> {
    const entityOrErr = await this._cqrsBus.execQuery<Result<TranscoderEntity>>(new GetOneTranscoderQuery({
      where: { id: { eq: entityId } }
    }))
    if (entityOrErr.isFailure) {
      return Result.Fail(entityOrErr.unwrapError())
    }

    const transcode = entityOrErr.unwrap()

    try {


      if (!transcode.mediaFile) {
        return Result.Fail(new TranscoderErrors.TranscoderMediaNoFound())
      }

      const mediaOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: { id: { eq: transcode.mediaFile } }
      }))

      if (mediaOrErr.isFailure) {
        return Result.Fail(new TranscoderErrors.TranscoderMediaNoFound())
      }

      const ffmpegOptionsOrErr = await this._cqrsBus.execQuery<Result<Array<FfmpgOptionEntity>>>(new ExtractFfmpgOptionsQuery({
        entityId: jobOptions.template
      }))

      if (ffmpegOptionsOrErr.isFailure) {
        return Result.Fail(new TranscoderErrors.NoFfmpgOptionsError())
      }

      const ffmpgOpts = ffmpegOptionsOrErr.unwrap()
      if (ffmpgOpts.length === 0) {
        return Result.Fail(new TranscoderErrors.NoFfmpgOptionsError())

      }


      await this._cqrsBus.execCommand<Result<void>>(new UpdateTranscoderCommand(entityId, {
        status: TranscodeStatus.TRANSCODING,
        options: { ...jobOptions }

      }))

      const realOptions: ITranscodeOption = {
        resolution: jobOptions.resolution,
        ffmpgOpts: ffmpgOpts.map(x => x.option)
      }

      const transcodeOrErr = await this._appTranscodeService.transcode(mediaOrErr.unwrap().url, transcode.folder, realOptions);

      if (transcodeOrErr.isFailure) {
        await this._cqrsBus.publishEvent(new OnTranscodeErrorEvent({ transcode, error: transcodeOrErr.unwrapError().message }))
        return Result.Fail(new TranscoderErrors.TranscodeError(transcodeOrErr.unwrapError()));
      }

      await this._cqrsBus.publishEvent(new OnTranscodeSuccessEvent({ transcode }))

      return Result.Ok()
    } catch (err) {

      const errMessage = err instanceof Result ? err.unwrapError()?.message : err?.toString()
      await this._cqrsBus.publishEvent(new OnTranscodeErrorEvent({ transcode, error: errMessage }))
      return Result.Fail(new AppError.UnexpectedError(err))
    }
  }

  async addJob(entityId: string, options?: ITranscodeOption): Promise<Result<void>> {
    try {

      await this._transcoderQueue.add('job', { entityId, options });

      await this._cqrsBus.execCommand<Result<void>>(new UpdateTranscoderCommand(entityId, {
        status: TranscodeStatus.QUEUED_TO_TRANSCODE,
        options: { ...options }

      }))

      return Result.Ok()
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }
  }

}
