import { CommandHandler } from '@nestjs/cqrs';
import { DeleteCorporationEinCommand } from '../impl/delete-corporation-ein.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';

@CommandHandler(DeleteCorporationEinCommand)
export class DeleteCorporationEinCommandHandler extends DeleteCommandHandler<CorporationEinEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, CorporationEinEntityService.name)
  }
}
