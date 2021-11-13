import { GetAllInvoicesAndPaymentsQueryHandler } from './handler/get-all-invoices-and-payments-query.handler';
import { GetPaginatedInvoicesAndPaymentsQueryHandler } from './handler/get-paginated-invoices-and-payments-query.handler';
import { GetOneInvoicesAndPaymentsQueryHandler } from './handler/get-one-invoices-and-payments-query.handler';
import { Provider } from '@nestjs/common';

export const InvoicesAndPaymentsQueryHandlers:Array<Provider> = [
  GetAllInvoicesAndPaymentsQueryHandler,
  GetPaginatedInvoicesAndPaymentsQueryHandler,
  GetOneInvoicesAndPaymentsQueryHandler,
];
