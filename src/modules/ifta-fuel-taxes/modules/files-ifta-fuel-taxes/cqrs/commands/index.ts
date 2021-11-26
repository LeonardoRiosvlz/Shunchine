import { CreateFilesIftaFuelTaxesCommandHandler } from './handler/create-files-ifta-fuel-taxes-command.handler';
import { DeleteFilesIftaFuelTaxesCommandHandler } from './handler/delete-files-ifta-fuel-taxes-command.handler';
import { UpdateFilesIftaFuelTaxesCommandHandler } from './handler/update-files-ifta-fuel-taxes-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesIftaFuelTaxesCommandHandler } from './handler/delete-many-files-ifta-fuel-taxes-command.handler';

export const FilesIftaFuelTaxesCommandHandlers: Array<Provider> = [
  CreateFilesIftaFuelTaxesCommandHandler,
  DeleteFilesIftaFuelTaxesCommandHandler,
  UpdateFilesIftaFuelTaxesCommandHandler,
  DeleteManyFilesIftaFuelTaxesCommandHandler
];
