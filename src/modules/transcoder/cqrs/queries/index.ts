import { GetAllTranscoderQueryHandler } from './handler/get-all-transcoder-query.handler';
import { GetPaginatedTranscoderQueryHandler } from './handler/get-paginated-transcoder-query.handler';
import { GetOneTranscoderQueryHandler } from './handler/get-one-transcoder-query.handler';
import { Provider } from '@nestjs/common';

export const TranscoderQueryHandlers:Array<Provider> = [
  GetAllTranscoderQueryHandler,
  GetPaginatedTranscoderQueryHandler,
  GetOneTranscoderQueryHandler,
];
