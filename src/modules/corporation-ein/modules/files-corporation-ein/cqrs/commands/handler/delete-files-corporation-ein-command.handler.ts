import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesCorporationEinCommand } from '../impl/delete-files-corporation-ein.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';

@CommandHandler(DeleteFilesCorporationEinCommand)
export class DeleteFilesCorporationEinCommandHandler extends DeleteCommandHandler<FilesCorporationEinEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesCorporationEinEntityService.name)
  }
}
