import { CommandHandler } from '@nestjs/cqrs';
import { DeleteYardRentalCommand } from '../impl/delete-yard-rental.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';

@CommandHandler(DeleteYardRentalCommand)
export class DeleteYardRentalCommandHandler extends DeleteCommandHandler<YardRentalEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, YardRentalEntityService.name)
  }
}
