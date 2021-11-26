import { GetAllFilesIftaFuelTaxesQueryHandler } from './handler/get-all-files-ifta-fuel-taxes-query.handler';
import { GetPaginatedFilesIftaFuelTaxesQueryHandler } from './handler/get-paginated-files-ifta-fuel-taxes-query.handler';
import { GetOneFilesIftaFuelTaxesQueryHandler } from './handler/get-one-files-ifta-fuel-taxes-query.handler';
import { Provider } from '@nestjs/common';

export const FilesIftaFuelTaxesQueryHandlers:Array<Provider> = [
  GetAllFilesIftaFuelTaxesQueryHandler,
  GetPaginatedFilesIftaFuelTaxesQueryHandler,
  GetOneFilesIftaFuelTaxesQueryHandler,
];
