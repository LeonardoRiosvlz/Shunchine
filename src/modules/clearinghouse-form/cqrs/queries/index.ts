import { GetAllClearinghouseFormQueryHandler } from './handler/get-all-clearinghouse-form-query.handler';
import { GetPaginatedClearinghouseFormQueryHandler } from './handler/get-paginated-clearinghouse-form-query.handler';
import { GetOneClearinghouseFormQueryHandler } from './handler/get-one-clearinghouse-form-query.handler';
import { Provider } from '@nestjs/common';

export const ClearinghouseFormQueryHandlers:Array<Provider> = [
  GetAllClearinghouseFormQueryHandler,
  GetPaginatedClearinghouseFormQueryHandler,
  GetOneClearinghouseFormQueryHandler,
];
