import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ClientEntity } from '../../../entities/client.entity';

export class CreateClientCommand extends CreateCommand<ClientEntity> {
  constructor(public request: ClientEntity) {
    super(request);
  }
}
