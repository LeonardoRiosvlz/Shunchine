import { CreateFilesIrpRoadTaxesCommandHandler } from './handler/create-files-irp-road-taxes-command.handler';
import { DeleteFilesIrpRoadTaxesCommandHandler } from './handler/delete-files-irp-road-taxes-command.handler';
import { UpdateFilesIrpRoadTaxesCommandHandler } from './handler/update-files-irp-road-taxes-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesIrpRoadTaxesCommandHandler } from './handler/delete-many-files-irp-road-taxes-command.handler';

export const FilesIrpRoadTaxesCommandHandlers: Array<Provider> = [
  CreateFilesIrpRoadTaxesCommandHandler,
  DeleteFilesIrpRoadTaxesCommandHandler,
  UpdateFilesIrpRoadTaxesCommandHandler,
  DeleteManyFilesIrpRoadTaxesCommandHandler
];
