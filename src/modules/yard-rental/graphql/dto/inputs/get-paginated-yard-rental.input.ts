import { Field, InputType } from '@nestjs/graphql';
import { YardRentalFilter,YardRentalFilterInput } from './yard-rental-filter.input';
import { OrderByYardRentalInput } from './order-by-yard-rental.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedYardRentalInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => YardRentalFilterInput, {nullable: true} )  where?: Filter<YardRentalFilter>;
  @Field(() => OrderByYardRentalInput, {nullable: true} )  orderBy?: OrderByYardRentalInput;
}
