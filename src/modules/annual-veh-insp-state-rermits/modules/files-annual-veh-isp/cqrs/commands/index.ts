import { CreateFilesAnnualVehIspCommandHandler } from './handler/create-files-annual-veh-isp-command.handler';
import { DeleteFilesAnnualVehIspCommandHandler } from './handler/delete-files-annual-veh-isp-command.handler';
import { UpdateFilesAnnualVehIspCommandHandler } from './handler/update-files-annual-veh-isp-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesAnnualVehIspCommandHandler } from './handler/delete-many-files-annual-veh-isp-command.handler';

export const FilesAnnualVehIspCommandHandlers: Array<Provider> = [
  CreateFilesAnnualVehIspCommandHandler,
  DeleteFilesAnnualVehIspCommandHandler,
  UpdateFilesAnnualVehIspCommandHandler,
  DeleteManyFilesAnnualVehIspCommandHandler
];
