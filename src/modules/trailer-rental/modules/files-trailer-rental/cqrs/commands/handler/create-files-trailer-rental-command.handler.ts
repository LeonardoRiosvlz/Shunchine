import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesTrailerRentalCommand } from '../impl/create-files-trailer-rental.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';

@CommandHandler(CreateFilesTrailerRentalCommand)
export class CreateFilesTrailerRentalCommandHandler extends CreateCommandHandler<FilesTrailerRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesTrailerRentalEntityService.name);
  }

}
