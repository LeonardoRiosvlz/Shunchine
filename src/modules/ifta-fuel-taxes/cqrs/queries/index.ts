import { GetAllIftaFuelTaxesQueryHandler } from './handler/get-all-ifta-fuel-taxes-query.handler';
import { GetPaginatedIftaFuelTaxesQueryHandler } from './handler/get-paginated-ifta-fuel-taxes-query.handler';
import { GetOneIftaFuelTaxesQueryHandler } from './handler/get-one-ifta-fuel-taxes-query.handler';
import { Provider } from '@nestjs/common';

export const IftaFuelTaxesQueryHandlers:Array<Provider> = [
  GetAllIftaFuelTaxesQueryHandler,
  GetPaginatedIftaFuelTaxesQueryHandler,
  GetOneIftaFuelTaxesQueryHandler,
];
