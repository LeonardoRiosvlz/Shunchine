import { Field, InputType } from '@nestjs/graphql';
import { FilesFinancedEquipmentFilter,FilesFinancedEquipmentFilterInput } from './files-financed-equipment-filter.input';
import { OrderByFilesFinancedEquipmentInput } from './order-by-files-financed-equipment.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesFinancedEquipmentInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesFinancedEquipmentFilterInput, {nullable: true} )  where?: Filter<FilesFinancedEquipmentFilter>;
  @Field(() => OrderByFilesFinancedEquipmentInput, {nullable: true} )  orderBy?: OrderByFilesFinancedEquipmentInput;
}
