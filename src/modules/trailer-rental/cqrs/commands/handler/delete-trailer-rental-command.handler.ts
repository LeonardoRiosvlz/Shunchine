import { CommandHandler } from '@nestjs/cqrs';
import { DeleteTrailerRentalCommand } from '../impl/delete-trailer-rental.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';

@CommandHandler(DeleteTrailerRentalCommand)
export class DeleteTrailerRentalCommandHandler extends DeleteCommandHandler<TrailerRentalEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, TrailerRentalEntityService.name)
  }
}
