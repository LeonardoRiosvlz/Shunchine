import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByRoadTaxesFormInput } from './order-by-road-taxes-form.input';
import { RoadTaxesFormFilter, RoadTaxesFormFilterInput } from './road-taxes-form-filter.input';

@InputType()
export class GetAllRoadTaxesFormInput {
  @Field(() => RoadTaxesFormFilterInput, {nullable: true} )  where?: Filter<RoadTaxesFormFilter>;
  @Field(() => OrderByRoadTaxesFormInput, {nullable: true} )  orderBy?: OrderByRoadTaxesFormInput;
}
