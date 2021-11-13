import { CreateCorporationEinCommandHandler } from './handler/create-corporation-ein-command.handler';
import { DeleteCorporationEinCommandHandler } from './handler/delete-corporation-ein-command.handler';
import { UpdateCorporationEinCommandHandler } from './handler/update-corporation-ein-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyCorporationEinCommandHandler } from './handler/delete-many-corporation-ein-command.handler';

export const CorporationEinCommandHandlers: Array<Provider> = [
  CreateCorporationEinCommandHandler,
  DeleteCorporationEinCommandHandler,
  UpdateCorporationEinCommandHandler,
  DeleteManyCorporationEinCommandHandler
];
