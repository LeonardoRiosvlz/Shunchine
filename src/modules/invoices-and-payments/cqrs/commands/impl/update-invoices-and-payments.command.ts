import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';

export class UpdateInvoicesAndPaymentsCommand extends UpdateCommand<InvoicesAndPaymentsEntity> {
  constructor(public entityId: string, update: Partial<InvoicesAndPaymentsEntity>) {
    super({entityId, update});
  }
}
