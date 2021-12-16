import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesFinancedEquipmentCommand } from '../impl/delete-files-financed-equipment.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';

@CommandHandler(DeleteFilesFinancedEquipmentCommand)
export class DeleteFilesFinancedEquipmentCommandHandler extends DeleteCommandHandler<FilesFinancedEquipmentEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesFinancedEquipmentEntityService.name)
  }
}
