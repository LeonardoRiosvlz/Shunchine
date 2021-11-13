import { GetAllIrpRoadTaxesQueryHandler } from './handler/get-all-irp-road-taxes-query.handler';
import { GetPaginatedIrpRoadTaxesQueryHandler } from './handler/get-paginated-irp-road-taxes-query.handler';
import { GetOneIrpRoadTaxesQueryHandler } from './handler/get-one-irp-road-taxes-query.handler';
import { Provider } from '@nestjs/common';

export const IrpRoadTaxesQueryHandlers:Array<Provider> = [
  GetAllIrpRoadTaxesQueryHandler,
  GetPaginatedIrpRoadTaxesQueryHandler,
  GetOneIrpRoadTaxesQueryHandler,
];
