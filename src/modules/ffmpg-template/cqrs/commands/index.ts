import { CreateFfmpgTemplateCommandHandler } from './handler/create-ffmpg-template-command.handler';
import { DeleteFfmpgTemplateCommandHandler } from './handler/delete-ffmpg-template-command.handler';
import { UpdateFfmpgTemplateCommandHandler } from './handler/update-ffmpg-template-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFfmpgTemplateCommandHandler } from './handler/delete-many-ffmpg-template-command.handler';

export const FfmpgTemplateCommandHandlers: Array<Provider> = [
  CreateFfmpgTemplateCommandHandler,
  DeleteFfmpgTemplateCommandHandler,
  UpdateFfmpgTemplateCommandHandler,
  DeleteManyFfmpgTemplateCommandHandler
];
