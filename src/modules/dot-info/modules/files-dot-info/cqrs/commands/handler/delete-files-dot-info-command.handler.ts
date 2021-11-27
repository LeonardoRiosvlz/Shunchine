import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesDotInfoCommand } from '../impl/delete-files-dot-info.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';

@CommandHandler(DeleteFilesDotInfoCommand)
export class DeleteFilesDotInfoCommandHandler extends DeleteCommandHandler<FilesDotInfoEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesDotInfoEntityService.name)
  }
}
