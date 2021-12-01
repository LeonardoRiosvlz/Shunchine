import { GetAllFilesYardRentalQueryHandler } from './handler/get-all-files-yard-rental-query.handler';
import { GetPaginatedFilesYardRentalQueryHandler } from './handler/get-paginated-files-yard-rental-query.handler';
import { GetOneFilesYardRentalQueryHandler } from './handler/get-one-files-yard-rental-query.handler';
import { Provider } from '@nestjs/common';

export const FilesYardRentalQueryHandlers:Array<Provider> = [
  GetAllFilesYardRentalQueryHandler,
  GetPaginatedFilesYardRentalQueryHandler,
  GetOneFilesYardRentalQueryHandler,
];
