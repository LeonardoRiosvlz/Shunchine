import { GetAllFilesFinancedEquipmentQueryHandler } from './handler/get-all-files-financed-equipment-query.handler';
import { GetPaginatedFilesFinancedEquipmentQueryHandler } from './handler/get-paginated-files-financed-equipment-query.handler';
import { GetOneFilesFinancedEquipmentQueryHandler } from './handler/get-one-files-financed-equipment-query.handler';
import { Provider } from '@nestjs/common';

export const FilesFinancedEquipmentQueryHandlers:Array<Provider> = [
  GetAllFilesFinancedEquipmentQueryHandler,
  GetPaginatedFilesFinancedEquipmentQueryHandler,
  GetOneFilesFinancedEquipmentQueryHandler,
];
