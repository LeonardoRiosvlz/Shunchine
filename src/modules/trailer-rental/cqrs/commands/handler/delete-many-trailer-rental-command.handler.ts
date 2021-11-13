import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyTrailerRentalCommand } from '../impl/delete-many-trailer-rental.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';

@CommandHandler(DeleteManyTrailerRentalCommand)
export class DeleteManyTrailerRentalCommandHandler extends DeleteManyCommandHandler<TrailerRentalEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, TrailerRentalEntityService.name)
  }

}
