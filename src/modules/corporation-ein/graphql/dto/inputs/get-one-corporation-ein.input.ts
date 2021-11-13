import { Field, InputType } from '@nestjs/graphql';
import { CorporationEinFilter, CorporationEinFilterInput } from './corporation-ein-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneCorporationEinInput {
  @Field(() => CorporationEinFilterInput, {nullable: true} )  where?: Filter<CorporationEinFilter>;
}
