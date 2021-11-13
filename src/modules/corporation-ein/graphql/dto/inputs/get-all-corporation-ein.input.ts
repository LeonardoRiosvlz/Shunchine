import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByCorporationEinInput } from './order-by-corporation-ein.input';
import { CorporationEinFilter, CorporationEinFilterInput } from './corporation-ein-filter.input';

@InputType()
export class GetAllCorporationEinInput {
  @Field(() => CorporationEinFilterInput, {nullable: true} )  where?: Filter<CorporationEinFilter>;
  @Field(() => OrderByCorporationEinInput, {nullable: true} )  orderBy?: OrderByCorporationEinInput;
}
