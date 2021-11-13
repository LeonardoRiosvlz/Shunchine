import { CreateIrpRoadTaxesCommandHandler } from './handler/create-irp-road-taxes-command.handler';
import { DeleteIrpRoadTaxesCommandHandler } from './handler/delete-irp-road-taxes-command.handler';
import { UpdateIrpRoadTaxesCommandHandler } from './handler/update-irp-road-taxes-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyIrpRoadTaxesCommandHandler } from './handler/delete-many-irp-road-taxes-command.handler';

export const IrpRoadTaxesCommandHandlers: Array<Provider> = [
  CreateIrpRoadTaxesCommandHandler,
  DeleteIrpRoadTaxesCommandHandler,
  UpdateIrpRoadTaxesCommandHandler,
  DeleteManyIrpRoadTaxesCommandHandler
];
