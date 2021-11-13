import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneInvoicesAndPaymentsQuery extends GetOneQuery<InvoicesAndPaymentsEntity>{
  constructor(public request: GetOneDto<InvoicesAndPaymentsEntity>) {
    super(request)
  }
}
