import { GetAllFfmpgTemplateQueryHandler } from './handler/get-all-ffmpg-template-query.handler';
import { GetPaginatedFfmpgTemplateQueryHandler } from './handler/get-paginated-ffmpg-template-query.handler';
import { GetOneFfmpgTemplateQueryHandler } from './handler/get-one-ffmpg-template-query.handler';
import { Provider } from '@nestjs/common';
import { ExtractFfmpgOptionsQueryHandler } from './handler/extract-ffmpg-options-query.handler';

export const FfmpgTemplateQueryHandlers:Array<Provider> = [
  GetAllFfmpgTemplateQueryHandler,
  GetPaginatedFfmpgTemplateQueryHandler,
  GetOneFfmpgTemplateQueryHandler,
  ExtractFfmpgOptionsQueryHandler
];
