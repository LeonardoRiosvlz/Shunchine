import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesTrailerRentalCommand } from '../impl/delete-many-files-trailer-rental.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';

@CommandHandler(DeleteManyFilesTrailerRentalCommand)
export class DeleteManyFilesTrailerRentalCommandHandler extends DeleteManyCommandHandler<FilesTrailerRentalEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesTrailerRentalEntityService.name)
  }

}
