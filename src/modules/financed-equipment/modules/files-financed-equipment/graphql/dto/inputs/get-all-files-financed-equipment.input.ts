import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesFinancedEquipmentInput } from './order-by-files-financed-equipment.input';
import { FilesFinancedEquipmentFilter, FilesFinancedEquipmentFilterInput } from './files-financed-equipment-filter.input';

@InputType()
export class GetAllFilesFinancedEquipmentInput {
  @Field(() => FilesFinancedEquipmentFilterInput, {nullable: true} )  where?: Filter<FilesFinancedEquipmentFilter>;
  @Field(() => OrderByFilesFinancedEquipmentInput, {nullable: true} )  orderBy?: OrderByFilesFinancedEquipmentInput;
}
