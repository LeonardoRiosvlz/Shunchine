import { GetAllAccountingQueryHandler } from './handler/get-all-accounting-query.handler';
import { GetPaginatedAccountingQueryHandler } from './handler/get-paginated-accounting-query.handler';
import { GetOneAccountingQueryHandler } from './handler/get-one-accounting-query.handler';
import { Provider } from '@nestjs/common';

export const AccountingQueryHandlers:Array<Provider> = [
  GetAllAccountingQueryHandler,
  GetPaginatedAccountingQueryHandler,
  GetOneAccountingQueryHandler,
];
