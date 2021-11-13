import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDriverFilesCommand } from '../impl/delete-driver-files.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';

@CommandHandler(DeleteDriverFilesCommand)
export class DeleteDriverFilesCommandHandler extends DeleteCommandHandler<DriverFilesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DriverFilesEntityService.name)
  }
}
