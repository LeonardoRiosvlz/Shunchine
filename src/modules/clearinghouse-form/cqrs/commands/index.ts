import { CreateClearinghouseFormCommandHandler } from './handler/create-clearinghouse-form-command.handler';
import { DeleteClearinghouseFormCommandHandler } from './handler/delete-clearinghouse-form-command.handler';
import { UpdateClearinghouseFormCommandHandler } from './handler/update-clearinghouse-form-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyClearinghouseFormCommandHandler } from './handler/delete-many-clearinghouse-form-command.handler';

export const ClearinghouseFormCommandHandlers: Array<Provider> = [
  CreateClearinghouseFormCommandHandler,
  DeleteClearinghouseFormCommandHandler,
  UpdateClearinghouseFormCommandHandler,
  DeleteManyClearinghouseFormCommandHandler
];
