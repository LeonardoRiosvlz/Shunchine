import { CreateFilesFinancedEquipmentCommandHandler } from './handler/create-files-financed-equipment-command.handler';
import { DeleteFilesFinancedEquipmentCommandHandler } from './handler/delete-files-financed-equipment-command.handler';
import { UpdateFilesFinancedEquipmentCommandHandler } from './handler/update-files-financed-equipment-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesFinancedEquipmentCommandHandler } from './handler/delete-many-files-financed-equipment-command.handler';

export const FilesFinancedEquipmentCommandHandlers: Array<Provider> = [
  CreateFilesFinancedEquipmentCommandHandler,
  DeleteFilesFinancedEquipmentCommandHandler,
  UpdateFilesFinancedEquipmentCommandHandler,
  DeleteManyFilesFinancedEquipmentCommandHandler
];
