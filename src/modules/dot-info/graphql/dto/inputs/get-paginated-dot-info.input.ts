import { Field, InputType } from '@nestjs/graphql';
import { DotInfoFilter,DotInfoFilterInput } from './dot-info-filter.input';
import { OrderByDotInfoInput } from './order-by-dot-info.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDotInfoInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DotInfoFilterInput, {nullable: true} )  where?: Filter<DotInfoFilter>;
  @Field(() => OrderByDotInfoInput, {nullable: true} )  orderBy?: OrderByDotInfoInput;
}
