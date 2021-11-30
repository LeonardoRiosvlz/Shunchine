import { GetAllFilesAnnualVehIspQueryHandler } from './handler/get-all-files-annual-veh-isp-query.handler';
import { GetPaginatedFilesAnnualVehIspQueryHandler } from './handler/get-paginated-files-annual-veh-isp-query.handler';
import { GetOneFilesAnnualVehIspQueryHandler } from './handler/get-one-files-annual-veh-isp-query.handler';
import { Provider } from '@nestjs/common';

export const FilesAnnualVehIspQueryHandlers:Array<Provider> = [
  GetAllFilesAnnualVehIspQueryHandler,
  GetPaginatedFilesAnnualVehIspQueryHandler,
  GetOneFilesAnnualVehIspQueryHandler,
];
