import { GetAllDriverFilesQueryHandler } from './handler/get-all-driver-files-query.handler';
import { GetPaginatedDriverFilesQueryHandler } from './handler/get-paginated-driver-files-query.handler';
import { GetOneDriverFilesQueryHandler } from './handler/get-one-driver-files-query.handler';
import { Provider } from '@nestjs/common';

export const DriverFilesQueryHandlers:Array<Provider> = [
  GetAllDriverFilesQueryHandler,
  GetPaginatedDriverFilesQueryHandler,
  GetOneDriverFilesQueryHandler,
];
