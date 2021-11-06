import { CreateTranscoderCommandHandler } from './handler/create-transcoder-command.handler';
import { DeleteTranscoderCommandHandler } from './handler/delete-transcoder-command.handler';
import { UpdateTranscoderCommandHandler } from './handler/update-transcoder-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyTranscoderCommandHandler } from './handler/delete-many-transcoder-command.handler';
import { TranscodeCommandHandler } from './handler/transcode-command.handler';

export const TranscoderCommandHandlers: Array<Provider> = [
  CreateTranscoderCommandHandler,
  DeleteTranscoderCommandHandler,
  UpdateTranscoderCommandHandler,
  DeleteManyTranscoderCommandHandler,
  TranscodeCommandHandler,
];
