import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByIrpRoadTaxesInput } from './order-by-irp-road-taxes.input';
import { IrpRoadTaxesFilter, IrpRoadTaxesFilterInput } from './irp-road-taxes-filter.input';

@InputType()
export class GetAllIrpRoadTaxesInput {
  @Field(() => IrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<IrpRoadTaxesFilter>;
  @Field(() => OrderByIrpRoadTaxesInput, {nullable: true} )  orderBy?: OrderByIrpRoadTaxesInput;
}
