import { GetAllCorporationEinQueryHandler } from './handler/get-all-corporation-ein-query.handler';
import { GetPaginatedCorporationEinQueryHandler } from './handler/get-paginated-corporation-ein-query.handler';
import { GetOneCorporationEinQueryHandler } from './handler/get-one-corporation-ein-query.handler';
import { Provider } from '@nestjs/common';

export const CorporationEinQueryHandlers:Array<Provider> = [
  GetAllCorporationEinQueryHandler,
  GetPaginatedCorporationEinQueryHandler,
  GetOneCorporationEinQueryHandler,
];
