import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByYardRentalInput } from './order-by-yard-rental.input';
import { YardRentalFilter, YardRentalFilterInput } from './yard-rental-filter.input';

@InputType()
export class GetAllYardRentalInput {
  @Field(() => YardRentalFilterInput, {nullable: true} )  where?: Filter<YardRentalFilter>;
  @Field(() => OrderByYardRentalInput, {nullable: true} )  orderBy?: OrderByYardRentalInput;
}
