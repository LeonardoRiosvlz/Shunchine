import { GetAllClientQueryHandler } from './handler/get-all-client-query.handler';
import { GetPaginatedClientQueryHandler } from './handler/get-paginated-client-query.handler';
import { GetOneClientQueryHandler } from './handler/get-one-client-query.handler';
import { Provider } from '@nestjs/common';

export const ClientQueryHandlers:Array<Provider> = [
  GetAllClientQueryHandler,
  GetPaginatedClientQueryHandler,
  GetOneClientQueryHandler,
];
