import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesCorporationEinCommand } from '../impl/delete-many-files-corporation-ein.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';

@CommandHandler(DeleteManyFilesCorporationEinCommand)
export class DeleteManyFilesCorporationEinCommandHandler extends DeleteManyCommandHandler<FilesCorporationEinEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesCorporationEinEntityService.name)
  }

}
