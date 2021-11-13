import { GetAllFinancedEquipmentQueryHandler } from './handler/get-all-financed-equipment-query.handler';
import { GetPaginatedFinancedEquipmentQueryHandler } from './handler/get-paginated-financed-equipment-query.handler';
import { GetOneFinancedEquipmentQueryHandler } from './handler/get-one-financed-equipment-query.handler';
import { Provider } from '@nestjs/common';

export const FinancedEquipmentQueryHandlers:Array<Provider> = [
  GetAllFinancedEquipmentQueryHandler,
  GetPaginatedFinancedEquipmentQueryHandler,
  GetOneFinancedEquipmentQueryHandler,
];
