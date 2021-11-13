import { CreateDriverFilesCommandHandler } from './handler/create-driver-files-command.handler';
import { DeleteDriverFilesCommandHandler } from './handler/delete-driver-files-command.handler';
import { UpdateDriverFilesCommandHandler } from './handler/update-driver-files-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDriverFilesCommandHandler } from './handler/delete-many-driver-files-command.handler';

export const DriverFilesCommandHandlers: Array<Provider> = [
  CreateDriverFilesCommandHandler,
  DeleteDriverFilesCommandHandler,
  UpdateDriverFilesCommandHandler,
  DeleteManyDriverFilesCommandHandler
];
