import { Field, InputType } from '@nestjs/graphql';
import { FinancedEquipmentFilter,FinancedEquipmentFilterInput } from './financed-equipment-filter.input';
import { OrderByFinancedEquipmentInput } from './order-by-financed-equipment.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFinancedEquipmentInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FinancedEquipmentFilterInput, {nullable: true} )  where?: Filter<FinancedEquipmentFilter>;
  @Field(() => OrderByFinancedEquipmentInput, {nullable: true} )  orderBy?: OrderByFinancedEquipmentInput;
}
