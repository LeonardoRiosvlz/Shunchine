import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyInvoicesAndPaymentsCommand extends DeleteManyCommand<InvoicesAndPaymentsEntity>{
  constructor(public request: GetOneDto<InvoicesAndPaymentsEntity>) {
    super(request)
  }
}
