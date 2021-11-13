import { Field, InputType } from '@nestjs/graphql';
import { TrailerRentalFilter,TrailerRentalFilterInput } from './trailer-rental-filter.input';
import { OrderByTrailerRentalInput } from './order-by-trailer-rental.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedTrailerRentalInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => TrailerRentalFilterInput, {nullable: true} )  where?: Filter<TrailerRentalFilter>;
  @Field(() => OrderByTrailerRentalInput, {nullable: true} )  orderBy?: OrderByTrailerRentalInput;
}
