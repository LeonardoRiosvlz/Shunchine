import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { AccountingEntity } from '../../../entities/accounting.entity';

export class CreateAccountingCommand extends CreateCommand<AccountingEntity> {
  constructor(public request: AccountingEntity) {
    super(request);
  }
}
