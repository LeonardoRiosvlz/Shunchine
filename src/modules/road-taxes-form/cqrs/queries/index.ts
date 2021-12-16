import { GetAllRoadTaxesFormQueryHandler } from './handler/get-all-road-taxes-form-query.handler';
import { GetPaginatedRoadTaxesFormQueryHandler } from './handler/get-paginated-road-taxes-form-query.handler';
import { GetOneRoadTaxesFormQueryHandler } from './handler/get-one-road-taxes-form-query.handler';
import { Provider } from '@nestjs/common';

export const RoadTaxesFormQueryHandlers:Array<Provider> = [
  GetAllRoadTaxesFormQueryHandler,
  GetPaginatedRoadTaxesFormQueryHandler,
  GetOneRoadTaxesFormQueryHandler,
];
