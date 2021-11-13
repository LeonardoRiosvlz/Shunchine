import { Field, InputType } from '@nestjs/graphql';
import { InvoicesAndPaymentsFilter, InvoicesAndPaymentsFilterInput } from './invoices-and-payments-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneInvoicesAndPaymentsInput {
  @Field(() => InvoicesAndPaymentsFilterInput, {nullable: true} )  where?: Filter<InvoicesAndPaymentsFilter>;
}
