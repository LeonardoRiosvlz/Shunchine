import { CommandHandler } from '@nestjs/cqrs';
import { UpdateTrailerRentalCommand } from '../impl/update-trailer-rental.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';

@CommandHandler(UpdateTrailerRentalCommand)
export class UpdateTrailerRentalCommandHandler extends UpdateCommandHandler<TrailerRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TrailerRentalEntityService.name)
  }

}
