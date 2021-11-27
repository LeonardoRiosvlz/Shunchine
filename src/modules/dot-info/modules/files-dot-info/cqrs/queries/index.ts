import { GetAllFilesDotInfoQueryHandler } from './handler/get-all-files-dot-info-query.handler';
import { GetPaginatedFilesDotInfoQueryHandler } from './handler/get-paginated-files-dot-info-query.handler';
import { GetOneFilesDotInfoQueryHandler } from './handler/get-one-files-dot-info-query.handler';
import { Provider } from '@nestjs/common';

export const FilesDotInfoQueryHandlers:Array<Provider> = [
  GetAllFilesDotInfoQueryHandler,
  GetPaginatedFilesDotInfoQueryHandler,
  GetOneFilesDotInfoQueryHandler,
];
