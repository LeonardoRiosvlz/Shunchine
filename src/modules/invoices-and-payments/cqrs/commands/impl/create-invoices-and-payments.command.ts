import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';

export class CreateInvoicesAndPaymentsCommand extends CreateCommand<InvoicesAndPaymentsEntity> {
  constructor(public request: InvoicesAndPaymentsEntity) {
    super(request);
  }
}
