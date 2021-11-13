import { Field, InputType, ID } from '@nestjs/graphql';
import { IrpRoadTaxesFilter, IrpRoadTaxesFilterInput } from './irp-road-taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyIrpRoadTaxesInput {
  @Field(() => IrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<IrpRoadTaxesFilter>;
}
