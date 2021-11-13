import { Field, InputType } from '@nestjs/graphql';
import { AccountingFilter,AccountingFilterInput } from './accounting-filter.input';
import { OrderByAccountingInput } from './order-by-accounting.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedAccountingInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => AccountingFilterInput, {nullable: true} )  where?: Filter<AccountingFilter>;
  @Field(() => OrderByAccountingInput, {nullable: true} )  orderBy?: OrderByAccountingInput;
}
