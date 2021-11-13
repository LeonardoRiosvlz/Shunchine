import { Field, InputType, ID } from '@nestjs/graphql';
import { TrailerRentalFilter, TrailerRentalFilterInput } from './trailer-rental-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyTrailerRentalInput {
  @Field(() => TrailerRentalFilterInput, {nullable: true} )  where?: Filter<TrailerRentalFilter>;
}
