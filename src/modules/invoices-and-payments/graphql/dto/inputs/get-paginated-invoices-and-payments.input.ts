import { Field, InputType } from '@nestjs/graphql';
import { InvoicesAndPaymentsFilter,InvoicesAndPaymentsFilterInput } from './invoices-and-payments-filter.input';
import { OrderByInvoicesAndPaymentsInput } from './order-by-invoices-and-payments.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedInvoicesAndPaymentsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => InvoicesAndPaymentsFilterInput, {nullable: true} )  where?: Filter<InvoicesAndPaymentsFilter>;
  @Field(() => OrderByInvoicesAndPaymentsInput, {nullable: true} )  orderBy?: OrderByInvoicesAndPaymentsInput;
}
