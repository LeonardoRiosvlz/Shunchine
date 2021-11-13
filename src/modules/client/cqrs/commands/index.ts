import { CreateClientCommandHandler } from './handler/create-client-command.handler';
import { DeleteClientCommandHandler } from './handler/delete-client-command.handler';
import { UpdateClientCommandHandler } from './handler/update-client-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyClientCommandHandler } from './handler/delete-many-client-command.handler';

export const ClientCommandHandlers: Array<Provider> = [
  CreateClientCommandHandler,
  DeleteClientCommandHandler,
  UpdateClientCommandHandler,
  DeleteManyClientCommandHandler
];
