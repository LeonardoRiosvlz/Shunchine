import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFinancedEquipmentCommand } from '../impl/delete-many-financed-equipment.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';

@CommandHandler(DeleteManyFinancedEquipmentCommand)
export class DeleteManyFinancedEquipmentCommandHandler extends DeleteManyCommandHandler<FinancedEquipmentEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FinancedEquipmentEntityService.name)
  }

}
