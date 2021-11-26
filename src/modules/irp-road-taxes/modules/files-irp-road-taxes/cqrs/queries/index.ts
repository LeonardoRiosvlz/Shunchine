import { GetAllFilesIrpRoadTaxesQueryHandler } from './handler/get-all-files-irp-road-taxes-query.handler';
import { GetPaginatedFilesIrpRoadTaxesQueryHandler } from './handler/get-paginated-files-irp-road-taxes-query.handler';
import { GetOneFilesIrpRoadTaxesQueryHandler } from './handler/get-one-files-irp-road-taxes-query.handler';
import { Provider } from '@nestjs/common';

export const FilesIrpRoadTaxesQueryHandlers:Array<Provider> = [
  GetAllFilesIrpRoadTaxesQueryHandler,
  GetPaginatedFilesIrpRoadTaxesQueryHandler,
  GetOneFilesIrpRoadTaxesQueryHandler,
];
