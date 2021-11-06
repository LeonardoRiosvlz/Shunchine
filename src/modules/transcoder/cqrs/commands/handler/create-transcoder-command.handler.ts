import { CommandHandler } from '@nestjs/cqrs';

import { CreateTranscoderCommand } from '../impl/create-transcoder.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';

@CommandHandler(CreateTranscoderCommand)
export class CreateTranscoderCommandHandler extends CreateCommandHandler<TranscoderEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TranscoderEntityService.name);
  }

}
