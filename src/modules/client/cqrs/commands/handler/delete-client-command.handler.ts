import { CommandHandler } from '@nestjs/cqrs';
import { DeleteClientCommand } from '../impl/delete-client.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ClientEntity } from '../../../entities/client.entity';
import { ClientEntityService } from '../../../services/client-entity.service';

@CommandHandler(DeleteClientCommand)
export class DeleteClientCommandHandler extends DeleteCommandHandler<ClientEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClientEntityService.name)
  }
}
