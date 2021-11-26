import { GetAllFilesCorporationEinQueryHandler } from './handler/get-all-files-corporation-ein-query.handler';
import { GetPaginatedFilesCorporationEinQueryHandler } from './handler/get-paginated-files-corporation-ein-query.handler';
import { GetOneFilesCorporationEinQueryHandler } from './handler/get-one-files-corporation-ein-query.handler';
import { Provider } from '@nestjs/common';

export const FilesCorporationEinQueryHandlers:Array<Provider> = [
  GetAllFilesCorporationEinQueryHandler,
  GetPaginatedFilesCorporationEinQueryHandler,
  GetOneFilesCorporationEinQueryHandler,
];
