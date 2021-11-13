import { CreateDotInfoCommandHandler } from './handler/create-dot-info-command.handler';
import { DeleteDotInfoCommandHandler } from './handler/delete-dot-info-command.handler';
import { UpdateDotInfoCommandHandler } from './handler/update-dot-info-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDotInfoCommandHandler } from './handler/delete-many-dot-info-command.handler';

export const DotInfoCommandHandlers: Array<Provider> = [
  CreateDotInfoCommandHandler,
  DeleteDotInfoCommandHandler,
  UpdateDotInfoCommandHandler,
  DeleteManyDotInfoCommandHandler
];
