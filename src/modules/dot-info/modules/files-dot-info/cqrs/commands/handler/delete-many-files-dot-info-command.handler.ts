import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesDotInfoCommand } from '../impl/delete-many-files-dot-info.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';

@CommandHandler(DeleteManyFilesDotInfoCommand)
export class DeleteManyFilesDotInfoCommandHandler extends DeleteManyCommandHandler<FilesDotInfoEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesDotInfoEntityService.name)
  }

}
