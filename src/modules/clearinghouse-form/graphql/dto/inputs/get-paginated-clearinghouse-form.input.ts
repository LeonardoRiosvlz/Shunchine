import { Field, InputType } from '@nestjs/graphql';
import { ClearinghouseFormFilter,ClearinghouseFormFilterInput } from './clearinghouse-form-filter.input';
import { OrderByClearinghouseFormInput } from './order-by-clearinghouse-form.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedClearinghouseFormInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ClearinghouseFormFilterInput, {nullable: true} )  where?: Filter<ClearinghouseFormFilter>;
  @Field(() => OrderByClearinghouseFormInput, {nullable: true} )  orderBy?: OrderByClearinghouseFormInput;
}
