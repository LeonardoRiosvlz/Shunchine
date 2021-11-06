import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyTranscoderCommand } from '../impl/delete-many-transcoder.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';

@CommandHandler(DeleteManyTranscoderCommand)
export class DeleteManyTranscoderCommandHandler extends DeleteManyCommandHandler<TranscoderEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, TranscoderEntityService.name)
  }

}
