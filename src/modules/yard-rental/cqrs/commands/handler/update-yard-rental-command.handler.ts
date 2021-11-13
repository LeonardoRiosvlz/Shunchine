import { CommandHandler } from '@nestjs/cqrs';
import { UpdateYardRentalCommand } from '../impl/update-yard-rental.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';

@CommandHandler(UpdateYardRentalCommand)
export class UpdateYardRentalCommandHandler extends UpdateCommandHandler<YardRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, YardRentalEntityService.name)
  }

}
