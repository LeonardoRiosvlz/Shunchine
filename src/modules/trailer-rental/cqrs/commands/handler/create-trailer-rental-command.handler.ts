import { CommandHandler } from '@nestjs/cqrs';

import { CreateTrailerRentalCommand } from '../impl/create-trailer-rental.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';

@CommandHandler(CreateTrailerRentalCommand)
export class CreateTrailerRentalCommandHandler extends CreateCommandHandler<TrailerRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TrailerRentalEntityService.name);
  }

}
