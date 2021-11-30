import { GetAllFilesTrailerRentalQueryHandler } from './handler/get-all-files-trailer-rental-query.handler';
import { GetPaginatedFilesTrailerRentalQueryHandler } from './handler/get-paginated-files-trailer-rental-query.handler';
import { GetOneFilesTrailerRentalQueryHandler } from './handler/get-one-files-trailer-rental-query.handler';
import { Provider } from '@nestjs/common';

export const FilesTrailerRentalQueryHandlers:Array<Provider> = [
  GetAllFilesTrailerRentalQueryHandler,
  GetPaginatedFilesTrailerRentalQueryHandler,
  GetOneFilesTrailerRentalQueryHandler,
];
