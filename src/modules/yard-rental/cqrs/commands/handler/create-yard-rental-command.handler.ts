import { CommandHandler } from '@nestjs/cqrs';

import { CreateYardRentalCommand } from '../impl/create-yard-rental.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';

@CommandHandler(CreateYardRentalCommand)
export class CreateYardRentalCommandHandler extends CreateCommandHandler<YardRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, YardRentalEntityService.name);
  }

}
