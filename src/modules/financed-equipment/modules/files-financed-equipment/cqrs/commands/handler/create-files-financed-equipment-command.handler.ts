import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesFinancedEquipmentCommand } from '../impl/create-files-financed-equipment.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';

@CommandHandler(CreateFilesFinancedEquipmentCommand)
export class CreateFilesFinancedEquipmentCommandHandler extends CreateCommandHandler<FilesFinancedEquipmentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesFinancedEquipmentEntityService.name);
  }

}
