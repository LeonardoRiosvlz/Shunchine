import { CreateIftaFuelTaxesCommandHandler } from './handler/create-ifta-fuel-taxes-command.handler';
import { DeleteIftaFuelTaxesCommandHandler } from './handler/delete-ifta-fuel-taxes-command.handler';
import { UpdateIftaFuelTaxesCommandHandler } from './handler/update-ifta-fuel-taxes-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyIftaFuelTaxesCommandHandler } from './handler/delete-many-ifta-fuel-taxes-command.handler';

export const IftaFuelTaxesCommandHandlers: Array<Provider> = [
  CreateIftaFuelTaxesCommandHandler,
  DeleteIftaFuelTaxesCommandHandler,
  UpdateIftaFuelTaxesCommandHandler,
  DeleteManyIftaFuelTaxesCommandHandler
];
