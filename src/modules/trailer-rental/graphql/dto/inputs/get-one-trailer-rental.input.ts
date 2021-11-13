import { Field, InputType } from '@nestjs/graphql';
import { TrailerRentalFilter, TrailerRentalFilterInput } from './trailer-rental-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneTrailerRentalInput {
  @Field(() => TrailerRentalFilterInput, {nullable: true} )  where?: Filter<TrailerRentalFilter>;
}
