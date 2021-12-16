import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesFinancedEquipmentCommand } from '../impl/update-files-financed-equipment.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';

@CommandHandler(UpdateFilesFinancedEquipmentCommand)
export class UpdateFilesFinancedEquipmentCommandHandler extends UpdateCommandHandler<FilesFinancedEquipmentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesFinancedEquipmentEntityService.name)
  }

}
