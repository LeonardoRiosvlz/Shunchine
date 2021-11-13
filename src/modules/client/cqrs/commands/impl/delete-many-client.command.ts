import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ClientEntity } from '../../../entities/client.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyClientCommand extends DeleteManyCommand<ClientEntity>{
  constructor(public request: GetOneDto<ClientEntity>) {
    super(request)
  }
}
