import { GetAllDotInfoQueryHandler } from './handler/get-all-dot-info-query.handler';
import { GetPaginatedDotInfoQueryHandler } from './handler/get-paginated-dot-info-query.handler';
import { GetOneDotInfoQueryHandler } from './handler/get-one-dot-info-query.handler';
import { Provider } from '@nestjs/common';

export const DotInfoQueryHandlers:Array<Provider> = [
  GetAllDotInfoQueryHandler,
  GetPaginatedDotInfoQueryHandler,
  GetOneDotInfoQueryHandler,
];
