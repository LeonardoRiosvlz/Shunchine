import { CreateFilesCorporationEinCommandHandler } from './handler/create-files-corporation-ein-command.handler';
import { DeleteFilesCorporationEinCommandHandler } from './handler/delete-files-corporation-ein-command.handler';
import { UpdateFilesCorporationEinCommandHandler } from './handler/update-files-corporation-ein-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesCorporationEinCommandHandler } from './handler/delete-many-files-corporation-ein-command.handler';

export const FilesCorporationEinCommandHandlers: Array<Provider> = [
  CreateFilesCorporationEinCommandHandler,
  DeleteFilesCorporationEinCommandHandler,
  UpdateFilesCorporationEinCommandHandler,
  DeleteManyFilesCorporationEinCommandHandler
];
