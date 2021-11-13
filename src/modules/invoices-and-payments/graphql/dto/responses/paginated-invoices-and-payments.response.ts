import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { InvoicesAndPaymentsResponse } from './invoices-and-payments.response';

@ObjectType()
export class PaginatedInvoicesAndPaymentsResponse extends PaginatedFindResultResponse(InvoicesAndPaymentsResponse) {
}

