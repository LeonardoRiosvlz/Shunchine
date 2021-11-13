import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFinancedEquipmentCommand } from '../impl/delete-financed-equipment.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';

@CommandHandler(DeleteFinancedEquipmentCommand)
export class DeleteFinancedEquipmentCommandHandler extends DeleteCommandHandler<FinancedEquipmentEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FinancedEquipmentEntityService.name)
  }
}
