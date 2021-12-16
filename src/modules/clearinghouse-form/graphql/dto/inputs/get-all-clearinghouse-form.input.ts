import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByClearinghouseFormInput } from './order-by-clearinghouse-form.input';
import { ClearinghouseFormFilter, ClearinghouseFormFilterInput } from './clearinghouse-form-filter.input';

@InputType()
export class GetAllClearinghouseFormInput {
  @Field(() => ClearinghouseFormFilterInput, {nullable: true} )  where?: Filter<ClearinghouseFormFilter>;
  @Field(() => OrderByClearinghouseFormInput, {nullable: true} )  orderBy?: OrderByClearinghouseFormInput;
}
