import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';

export class CreateClearinghouseFormCommand extends CreateCommand<ClearinghouseFormEntity> {
  constructor(public request: ClearinghouseFormEntity) {
    super(request);
  }
}
