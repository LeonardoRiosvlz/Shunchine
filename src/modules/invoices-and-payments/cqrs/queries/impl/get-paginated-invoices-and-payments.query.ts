import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedInvoicesAndPaymentsQuery extends GetPaginatedQuery<InvoicesAndPaymentsEntity>{
  constructor(public request: GetPaginatedDto<InvoicesAndPaymentsEntity>) {
    super(request)
  }
}
