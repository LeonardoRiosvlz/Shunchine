import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesFinancedEquipmentCommand } from '../impl/delete-many-files-financed-equipment.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';

@CommandHandler(DeleteManyFilesFinancedEquipmentCommand)
export class DeleteManyFilesFinancedEquipmentCommandHandler extends DeleteManyCommandHandler<FilesFinancedEquipmentEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesFinancedEquipmentEntityService.name)
  }

}
