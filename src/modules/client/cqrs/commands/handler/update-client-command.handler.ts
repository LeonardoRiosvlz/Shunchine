import { CommandHandler } from '@nestjs/cqrs';
import { UpdateClientCommand } from '../impl/update-client.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ClientEntityService } from '../../../services/client-entity.service';
import { ClientEntity } from '../../../entities/client.entity';

@CommandHandler(UpdateClientCommand)
export class UpdateClientCommandHandler extends UpdateCommandHandler<ClientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClientEntityService.name)
  }

}
