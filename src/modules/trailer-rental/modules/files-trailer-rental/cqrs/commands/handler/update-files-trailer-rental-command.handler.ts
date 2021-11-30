import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesTrailerRentalCommand } from '../impl/update-files-trailer-rental.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';

@CommandHandler(UpdateFilesTrailerRentalCommand)
export class UpdateFilesTrailerRentalCommandHandler extends UpdateCommandHandler<FilesTrailerRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesTrailerRentalEntityService.name)
  }

}
