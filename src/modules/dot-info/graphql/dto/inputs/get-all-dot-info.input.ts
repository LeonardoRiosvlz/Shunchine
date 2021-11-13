import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDotInfoInput } from './order-by-dot-info.input';
import { DotInfoFilter, DotInfoFilterInput } from './dot-info-filter.input';

@InputType()
export class GetAllDotInfoInput {
  @Field(() => DotInfoFilterInput, {nullable: true} )  where?: Filter<DotInfoFilter>;
  @Field(() => OrderByDotInfoInput, {nullable: true} )  orderBy?: OrderByDotInfoInput;
}
