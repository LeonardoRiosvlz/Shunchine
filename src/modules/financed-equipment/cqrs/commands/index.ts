import { CreateFinancedEquipmentCommandHandler } from './handler/create-financed-equipment-command.handler';
import { DeleteFinancedEquipmentCommandHandler } from './handler/delete-financed-equipment-command.handler';
import { UpdateFinancedEquipmentCommandHandler } from './handler/update-financed-equipment-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFinancedEquipmentCommandHandler } from './handler/delete-many-financed-equipment-command.handler';

export const FinancedEquipmentCommandHandlers: Array<Provider> = [
  CreateFinancedEquipmentCommandHandler,
  DeleteFinancedEquipmentCommandHandler,
  UpdateFinancedEquipmentCommandHandler,
  DeleteManyFinancedEquipmentCommandHandler
];
