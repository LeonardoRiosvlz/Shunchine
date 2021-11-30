import { CreateFilesTrailerRentalCommandHandler } from './handler/create-files-trailer-rental-command.handler';
import { DeleteFilesTrailerRentalCommandHandler } from './handler/delete-files-trailer-rental-command.handler';
import { UpdateFilesTrailerRentalCommandHandler } from './handler/update-files-trailer-rental-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesTrailerRentalCommandHandler } from './handler/delete-many-files-trailer-rental-command.handler';

export const FilesTrailerRentalCommandHandlers: Array<Provider> = [
  CreateFilesTrailerRentalCommandHandler,
  DeleteFilesTrailerRentalCommandHandler,
  UpdateFilesTrailerRentalCommandHandler,
  DeleteManyFilesTrailerRentalCommandHandler
];
