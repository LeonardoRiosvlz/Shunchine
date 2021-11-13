import { CommandHandler } from '@nestjs/cqrs';

import { CreateFinancedEquipmentCommand } from '../impl/create-financed-equipment.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';

@CommandHandler(CreateFinancedEquipmentCommand)
export class CreateFinancedEquipmentCommandHandler extends CreateCommandHandler<FinancedEquipmentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FinancedEquipmentEntityService.name);
  }

}
