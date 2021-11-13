import { CreateAccountingCommandHandler } from './handler/create-accounting-command.handler';
import { DeleteAccountingCommandHandler } from './handler/delete-accounting-command.handler';
import { UpdateAccountingCommandHandler } from './handler/update-accounting-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyAccountingCommandHandler } from './handler/delete-many-accounting-command.handler';

export const AccountingCommandHandlers: Array<Provider> = [
  CreateAccountingCommandHandler,
  DeleteAccountingCommandHandler,
  UpdateAccountingCommandHandler,
  DeleteManyAccountingCommandHandler
];
