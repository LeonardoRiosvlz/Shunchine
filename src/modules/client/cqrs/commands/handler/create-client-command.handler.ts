import { CommandHandler } from '@nestjs/cqrs';

import { CreateClientCommand } from '../impl/create-client.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ClientEntity } from '../../../entities/client.entity';
import { ClientEntityService } from '../../../services/client-entity.service';

@CommandHandler(CreateClientCommand)
export class CreateClientCommandHandler extends CreateCommandHandler<ClientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClientEntityService.name);
  }

}
