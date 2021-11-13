import { Field, InputType, ID } from '@nestjs/graphql';
import { CorporationEinFilter, CorporationEinFilterInput } from './corporation-ein-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyCorporationEinInput {
  @Field(() => CorporationEinFilterInput, {nullable: true} )  where?: Filter<CorporationEinFilter>;
}
