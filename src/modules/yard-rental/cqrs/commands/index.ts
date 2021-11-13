import { CreateYardRentalCommandHandler } from './handler/create-yard-rental-command.handler';
import { DeleteYardRentalCommandHandler } from './handler/delete-yard-rental-command.handler';
import { UpdateYardRentalCommandHandler } from './handler/update-yard-rental-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyYardRentalCommandHandler } from './handler/delete-many-yard-rental-command.handler';

export const YardRentalCommandHandlers: Array<Provider> = [
  CreateYardRentalCommandHandler,
  DeleteYardRentalCommandHandler,
  UpdateYardRentalCommandHandler,
  DeleteManyYardRentalCommandHandler
];
