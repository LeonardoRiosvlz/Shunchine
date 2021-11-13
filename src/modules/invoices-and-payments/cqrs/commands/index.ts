import { CreateInvoicesAndPaymentsCommandHandler } from './handler/create-invoices-and-payments-command.handler';
import { DeleteInvoicesAndPaymentsCommandHandler } from './handler/delete-invoices-and-payments-command.handler';
import { UpdateInvoicesAndPaymentsCommandHandler } from './handler/update-invoices-and-payments-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyInvoicesAndPaymentsCommandHandler } from './handler/delete-many-invoices-and-payments-command.handler';

export const InvoicesAndPaymentsCommandHandlers: Array<Provider> = [
  CreateInvoicesAndPaymentsCommandHandler,
  DeleteInvoicesAndPaymentsCommandHandler,
  UpdateInvoicesAndPaymentsCommandHandler,
  DeleteManyInvoicesAndPaymentsCommandHandler
];
