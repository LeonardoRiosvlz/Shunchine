import { Field, InputType } from '@nestjs/graphql';
import { FilesFinancedEquipmentFilter, FilesFinancedEquipmentFilterInput } from './files-financed-equipment-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesFinancedEquipmentInput {
  @Field(() => FilesFinancedEquipmentFilterInput, {nullable: true} )  where?: Filter<FilesFinancedEquipmentFilter>;
}
