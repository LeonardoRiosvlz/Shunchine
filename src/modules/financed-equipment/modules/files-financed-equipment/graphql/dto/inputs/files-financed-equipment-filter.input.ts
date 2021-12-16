import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';

@ObjectType()
export class FilesFinancedEquipmentFilter implements IEntityFilter<FilesFinancedEquipmentEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) financedEquipment?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FilesFinancedEquipmentFilterInput = FilterType(FilesFinancedEquipmentFilter);