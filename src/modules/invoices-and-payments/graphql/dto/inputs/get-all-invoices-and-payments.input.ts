import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByInvoicesAndPaymentsInput } from './order-by-invoices-and-payments.input';
import { InvoicesAndPaymentsFilter, InvoicesAndPaymentsFilterInput } from './invoices-and-payments-filter.input';

@InputType()
export class GetAllInvoicesAndPaymentsInput {
  @Field(() => InvoicesAndPaymentsFilterInput, {nullable: true} )  where?: Filter<InvoicesAndPaymentsFilter>;
  @Field(() => OrderByInvoicesAndPaymentsInput, {nullable: true} )  orderBy?: OrderByInvoicesAndPaymentsInput;
}
