import { CreateFilesDotInfoCommandHandler } from './handler/create-files-dot-info-command.handler';
import { DeleteFilesDotInfoCommandHandler } from './handler/delete-files-dot-info-command.handler';
import { UpdateFilesDotInfoCommandHandler } from './handler/update-files-dot-info-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesDotInfoCommandHandler } from './handler/delete-many-files-dot-info-command.handler';

export const FilesDotInfoCommandHandlers: Array<Provider> = [
  CreateFilesDotInfoCommandHandler,
  DeleteFilesDotInfoCommandHandler,
  UpdateFilesDotInfoCommandHandler,
  DeleteManyFilesDotInfoCommandHandler
];
