import { CreateFfmpgOptionCommandHandler } from './handler/create-ffmpg-option-command.handler';
import { DeleteFfmpgOptionCommandHandler } from './handler/delete-ffmpg-option-command.handler';
import { UpdateFfmpgOptionCommandHandler } from './handler/update-ffmpg-option-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFfmpgOptionCommandHandler } from './handler/delete-many-ffmpg-option-command.handler';

export const FfmpgOptionCommandHandlers: Array<Provider> = [
  CreateFfmpgOptionCommandHandler,
  DeleteFfmpgOptionCommandHandler,
  UpdateFfmpgOptionCommandHandler,
  DeleteManyFfmpgOptionCommandHandler
];
