import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDotInfoCommand } from '../impl/delete-many-dot-info.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';

@CommandHandler(DeleteManyDotInfoCommand)
export class DeleteManyDotInfoCommandHandler extends DeleteManyCommandHandler<DotInfoEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DotInfoEntityService.name)
  }

}
