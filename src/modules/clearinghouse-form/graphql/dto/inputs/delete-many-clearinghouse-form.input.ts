import { Field, InputType, ID } from '@nestjs/graphql';
import { ClearinghouseFormFilter, ClearinghouseFormFilterInput } from './clearinghouse-form-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyClearinghouseFormInput {
  @Field(() => ClearinghouseFormFilterInput, {nullable: true} )  where?: Filter<ClearinghouseFormFilter>;
}
