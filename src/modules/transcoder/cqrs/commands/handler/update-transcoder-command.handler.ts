import { CommandHandler } from '@nestjs/cqrs';
import { UpdateTranscoderCommand } from '../impl/update-transcoder.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';
import { TranscoderEntity } from '../../../entities/transcoder.entity';

@CommandHandler(UpdateTranscoderCommand)
export class UpdateTranscoderCommandHandler extends UpdateCommandHandler<TranscoderEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TranscoderEntityService.name)
  }

}
