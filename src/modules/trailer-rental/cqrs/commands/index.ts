import { CreateTrailerRentalCommandHandler } from './handler/create-trailer-rental-command.handler';
import { DeleteTrailerRentalCommandHandler } from './handler/delete-trailer-rental-command.handler';
import { UpdateTrailerRentalCommandHandler } from './handler/update-trailer-rental-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyTrailerRentalCommandHandler } from './handler/delete-many-trailer-rental-command.handler';

export const TrailerRentalCommandHandlers: Array<Provider> = [
  CreateTrailerRentalCommandHandler,
  DeleteTrailerRentalCommandHandler,
  UpdateTrailerRentalCommandHandler,
  DeleteManyTrailerRentalCommandHandler
];
