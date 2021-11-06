import { GetAllFfmpgOptionQueryHandler } from './handler/get-all-ffmpg-option-query.handler';
import { GetPaginatedFfmpgOptionQueryHandler } from './handler/get-paginated-ffmpg-option-query.handler';
import { GetOneFfmpgOptionQueryHandler } from './handler/get-one-ffmpg-option-query.handler';
import { Provider } from '@nestjs/common';

export const FfmpgOptionQueryHandlers:Array<Provider> = [
  GetAllFfmpgOptionQueryHandler,
  GetPaginatedFfmpgOptionQueryHandler,
  GetOneFfmpgOptionQueryHandler,
];
