import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByTrailerRentalInput } from './order-by-trailer-rental.input';
import { TrailerRentalFilter, TrailerRentalFilterInput } from './trailer-rental-filter.input';

@InputType()
export class GetAllTrailerRentalInput {
  @Field(() => TrailerRentalFilterInput, {nullable: true} )  where?: Filter<TrailerRentalFilter>;
  @Field(() => OrderByTrailerRentalInput, {nullable: true} )  orderBy?: OrderByTrailerRentalInput;
}
