import { GetAllAnnualVehInspStateRermitsQueryHandler } from './handler/get-all-annual-veh-insp-state-rermits-query.handler';
import { GetPaginatedAnnualVehInspStateRermitsQueryHandler } from './handler/get-paginated-annual-veh-insp-state-rermits-query.handler';
import { GetOneAnnualVehInspStateRermitsQueryHandler } from './handler/get-one-annual-veh-insp-state-rermits-query.handler';
import { Provider } from '@nestjs/common';

export const AnnualVehInspStateRermitsQueryHandlers:Array<Provider> = [
  GetAllAnnualVehInspStateRermitsQueryHandler,
  GetPaginatedAnnualVehInspStateRermitsQueryHandler,
  GetOneAnnualVehInspStateRermitsQueryHandler,
];
