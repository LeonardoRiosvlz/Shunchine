import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllInvoicesAndPaymentsQuery extends GetAllQuery<InvoicesAndPaymentsEntity>{
  constructor(public request: GetAllDto<InvoicesAndPaymentsEntity>) {
    super(request)
  }
}
