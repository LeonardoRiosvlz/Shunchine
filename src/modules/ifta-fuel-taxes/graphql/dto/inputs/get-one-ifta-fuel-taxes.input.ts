import { Field, InputType } from '@nestjs/graphql';
import { IftaFuelTaxesFilter, IftaFuelTaxesFilterInput } from './ifta-fuel-taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneIftaFuelTaxesInput {
  @Field(() => IftaFuelTaxesFilterInput, {nullable: true} )  where?: Filter<IftaFuelTaxesFilter>;
}
