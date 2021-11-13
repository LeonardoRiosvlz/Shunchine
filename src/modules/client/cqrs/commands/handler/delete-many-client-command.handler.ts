import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyClientCommand } from '../impl/delete-many-client.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ClientEntity } from '../../../entities/client.entity';
import { ClientEntityService } from '../../../services/client-entity.service';

@CommandHandler(DeleteManyClientCommand)
export class DeleteManyClientCommandHandler extends DeleteManyCommandHandler<ClientEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClientEntityService.name)
  }

}
