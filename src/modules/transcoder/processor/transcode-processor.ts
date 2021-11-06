import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { ITranscodeJob } from '../interfaces/ITranscodeJob';
import { PreTranscodeService } from '../services/pre-transcode.service';

@Processor({name: 'transcode'})
export class TranscodeProcessor {
  private readonly _logger: Logger = new Logger(TranscodeProcessor.name);;

  constructor(
    private readonly _preTranscodeService: PreTranscodeService,
  ) {

  }

  @Process('job')
  async process({ data: { entityId, options } }: Job<ITranscodeJob>): Promise<void> {
    try {
      await this._preTranscodeService.processEntity(entityId, options);
    } catch (error) {
      const errMsg = `${error.message}`;
      this._logger.error(errMsg)
      throw new Error(errMsg);
    }
  }
}
