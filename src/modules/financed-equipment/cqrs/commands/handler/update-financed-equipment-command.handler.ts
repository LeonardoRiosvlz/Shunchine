import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFinancedEquipmentCommand } from '../impl/update-financed-equipment.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';

@CommandHandler(UpdateFinancedEquipmentCommand)
export class UpdateFinancedEquipmentCommandHandler extends UpdateCommandHandler<FinancedEquipmentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FinancedEquipmentEntityService.name)
  }

}
