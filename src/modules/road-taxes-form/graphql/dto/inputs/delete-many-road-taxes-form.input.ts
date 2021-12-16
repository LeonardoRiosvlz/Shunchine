import { Field, InputType, ID } from '@nestjs/graphql';
import { RoadTaxesFormFilter, RoadTaxesFormFilterInput } from './road-taxes-form-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyRoadTaxesFormInput {
  @Field(() => RoadTaxesFormFilterInput, {nullable: true} )  where?: Filter<RoadTaxesFormFilter>;
}
