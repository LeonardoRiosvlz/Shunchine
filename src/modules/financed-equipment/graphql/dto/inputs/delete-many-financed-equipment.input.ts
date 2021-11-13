import { Field, InputType, ID } from '@nestjs/graphql';
import { FinancedEquipmentFilter, FinancedEquipmentFilterInput } from './financed-equipment-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFinancedEquipmentInput {
  @Field(() => FinancedEquipmentFilterInput, {nullable: true} )  where?: Filter<FinancedEquipmentFilter>;
}
