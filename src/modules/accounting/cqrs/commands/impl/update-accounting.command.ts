import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { AccountingEntity } from '../../../entities/accounting.entity';

export class UpdateAccountingCommand extends UpdateCommand<AccountingEntity> {
  constructor(public entityId: string, update: Partial<AccountingEntity>) {
    super({entityId, update});
  }
}
