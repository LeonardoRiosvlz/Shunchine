import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesTrailerRentalCommand } from '../impl/delete-files-trailer-rental.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';

@CommandHandler(DeleteFilesTrailerRentalCommand)
export class DeleteFilesTrailerRentalCommandHandler extends DeleteCommandHandler<FilesTrailerRentalEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesTrailerRentalEntityService.name)
  }
}
