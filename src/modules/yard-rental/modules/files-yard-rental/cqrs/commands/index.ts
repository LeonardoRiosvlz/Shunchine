import { CreateFilesYardRentalCommandHandler } from './handler/create-files-yard-rental-command.handler';
import { DeleteFilesYardRentalCommandHandler } from './handler/delete-files-yard-rental-command.handler';
import { UpdateFilesYardRentalCommandHandler } from './handler/update-files-yard-rental-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesYardRentalCommandHandler } from './handler/delete-many-files-yard-rental-command.handler';

export const FilesYardRentalCommandHandlers: Array<Provider> = [
  CreateFilesYardRentalCommandHandler,
  DeleteFilesYardRentalCommandHandler,
  UpdateFilesYardRentalCommandHandler,
  DeleteManyFilesYardRentalCommandHandler
];
