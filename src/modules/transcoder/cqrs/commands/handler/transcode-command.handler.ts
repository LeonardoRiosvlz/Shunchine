import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { ContextId, ModuleRef } from '@nestjs/core';
import { TranscodeCommand } from '../impl/transcode.command';
import { Result } from 'src/shared/core/class/result';
import { PreTranscodeService } from 'src/modules/transcoder/services/pre-transcode.service';

@CommandHandler(TranscodeCommand)
export class TranscodeCommandHandler implements ICommandHandler<TranscodeCommand> {
  constructor(
    private moduleRef: ModuleRef
  ) {

  }
  async execute({ request: { entityId, options }, contextId }: TranscodeCommand): Promise<Result<void>> {
    const service = await this.moduleRef.resolve(PreTranscodeService, contextId as ContextId);
    return service.addJob(entityId, options)
  }

}
