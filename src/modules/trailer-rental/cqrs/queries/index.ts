import { GetAllTrailerRentalQueryHandler } from './handler/get-all-trailer-rental-query.handler';
import { GetPaginatedTrailerRentalQueryHandler } from './handler/get-paginated-trailer-rental-query.handler';
import { GetOneTrailerRentalQueryHandler } from './handler/get-one-trailer-rental-query.handler';
import { Provider } from '@nestjs/common';

export const TrailerRentalQueryHandlers:Array<Provider> = [
  GetAllTrailerRentalQueryHandler,
  GetPaginatedTrailerRentalQueryHandler,
  GetOneTrailerRentalQueryHandler,
];
