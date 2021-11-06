import { CommandHandler } from '@nestjs/cqrs';
import { DeleteTranscoderCommand } from '../impl/delete-transcoder.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';

@CommandHandler(DeleteTranscoderCommand)
export class DeleteTranscoderCommandHandler extends DeleteCommandHandler<TranscoderEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, TranscoderEntityService.name)
  }
}
