import { Field, InputType } from '@nestjs/graphql';
import { IrpRoadTaxesFilter, IrpRoadTaxesFilterInput } from './irp-road-taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneIrpRoadTaxesInput {
  @Field(() => IrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<IrpRoadTaxesFilter>;
}
