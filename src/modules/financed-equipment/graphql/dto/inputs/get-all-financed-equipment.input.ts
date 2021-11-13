import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFinancedEquipmentInput } from './order-by-financed-equipment.input';
import { FinancedEquipmentFilter, FinancedEquipmentFilterInput } from './financed-equipment-filter.input';

@InputType()
export class GetAllFinancedEquipmentInput {
  @Field(() => FinancedEquipmentFilterInput, {nullable: true} )  where?: Filter<FinancedEquipmentFilter>;
  @Field(() => OrderByFinancedEquipmentInput, {nullable: true} )  orderBy?: OrderByFinancedEquipmentInput;
}
