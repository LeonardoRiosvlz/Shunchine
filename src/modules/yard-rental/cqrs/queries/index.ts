import { GetAllYardRentalQueryHandler } from './handler/get-all-yard-rental-query.handler';
import { GetPaginatedYardRentalQueryHandler } from './handler/get-paginated-yard-rental-query.handler';
import { GetOneYardRentalQueryHandler } from './handler/get-one-yard-rental-query.handler';
import { Provider } from '@nestjs/common';

export const YardRentalQueryHandlers:Array<Provider> = [
  GetAllYardRentalQueryHandler,
  GetPaginatedYardRentalQueryHandler,
  GetOneYardRentalQueryHandler,
];
