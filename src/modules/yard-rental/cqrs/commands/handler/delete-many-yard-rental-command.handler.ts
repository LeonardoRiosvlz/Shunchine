import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyYardRentalCommand } from '../impl/delete-many-yard-rental.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';

@CommandHandler(DeleteManyYardRentalCommand)
export class DeleteManyYardRentalCommandHandler extends DeleteManyCommandHandler<YardRentalEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, YardRentalEntityService.name)
  }

}
