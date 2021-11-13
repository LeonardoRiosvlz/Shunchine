import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByAccountingInput } from './order-by-accounting.input';
import { AccountingFilter, AccountingFilterInput } from './accounting-filter.input';

@InputType()
export class GetAllAccountingInput {
  @Field(() => AccountingFilterInput, {nullable: true} )  where?: Filter<AccountingFilter>;
  @Field(() => OrderByAccountingInput, {nullable: true} )  orderBy?: OrderByAccountingInput;
}
