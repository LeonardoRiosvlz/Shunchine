import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesYardRentalCommand } from '../impl/delete-many-files-yard-rental.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';

@CommandHandler(DeleteManyFilesYardRentalCommand)
export class DeleteManyFilesYardRentalCommandHandler extends DeleteManyCommandHandler<FilesYardRentalEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesYardRentalEntityService.name)
  }

}
