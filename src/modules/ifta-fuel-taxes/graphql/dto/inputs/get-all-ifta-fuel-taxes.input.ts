import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByIftaFuelTaxesInput } from './order-by-ifta-fuel-taxes.input';
import { IftaFuelTaxesFilter, IftaFuelTaxesFilterInput } from './ifta-fuel-taxes-filter.input';

@InputType()
export class GetAllIftaFuelTaxesInput {
  @Field(() => IftaFuelTaxesFilterInput, {nullable: true} )  where?: Filter<IftaFuelTaxesFilter>;
  @Field(() => OrderByIftaFuelTaxesInput, {nullable: true} )  orderBy?: OrderByIftaFuelTaxesInput;
}
