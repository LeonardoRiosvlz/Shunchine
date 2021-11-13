import { Field, InputType } from '@nestjs/graphql';
import { YardRentalFilter, YardRentalFilterInput } from './yard-rental-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneYardRentalInput {
  @Field(() => YardRentalFilterInput, {nullable: true} )  where?: Filter<YardRentalFilter>;
}
