import { CreateRoadTaxesFormCommandHandler } from './handler/create-road-taxes-form-command.handler';
import { DeleteRoadTaxesFormCommandHandler } from './handler/delete-road-taxes-form-command.handler';
import { UpdateRoadTaxesFormCommandHandler } from './handler/update-road-taxes-form-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyRoadTaxesFormCommandHandler } from './handler/delete-many-road-taxes-form-command.handler';

export const RoadTaxesFormCommandHandlers: Array<Provider> = [
  CreateRoadTaxesFormCommandHandler,
  DeleteRoadTaxesFormCommandHandler,
  UpdateRoadTaxesFormCommandHandler,
  DeleteManyRoadTaxesFormCommandHandler
];
