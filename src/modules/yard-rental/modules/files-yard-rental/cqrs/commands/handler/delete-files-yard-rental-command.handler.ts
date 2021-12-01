import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesYardRentalCommand } from '../impl/delete-files-yard-rental.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';

@CommandHandler(DeleteFilesYardRentalCommand)
export class DeleteFilesYardRentalCommandHandler extends DeleteCommandHandler<FilesYardRentalEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesYardRentalEntityService.name)
  }
}
