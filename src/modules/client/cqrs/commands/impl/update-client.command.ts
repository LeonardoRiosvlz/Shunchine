import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ClientEntity } from '../../../entities/client.entity';

export class UpdateClientCommand extends UpdateCommand<ClientEntity> {
  constructor(public entityId: string, update: Partial<ClientEntity>) {
    super({entityId, update});
  }
}
