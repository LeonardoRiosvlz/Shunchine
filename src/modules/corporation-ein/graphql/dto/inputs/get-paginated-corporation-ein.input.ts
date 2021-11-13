import { Field, InputType } from '@nestjs/graphql';
import { CorporationEinFilter,CorporationEinFilterInput } from './corporation-ein-filter.input';
import { OrderByCorporationEinInput } from './order-by-corporation-ein.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedCorporationEinInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => CorporationEinFilterInput, {nullable: true} )  where?: Filter<CorporationEinFilter>;
  @Field(() => OrderByCorporationEinInput, {nullable: true} )  orderBy?: OrderByCorporationEinInput;
}
