import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';

@ObjectType()
export class FilesIrpRoadTaxesFilter implements IEntityFilter<FilesIrpRoadTaxesEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) irpRoadTaxes?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FilesIrpRoadTaxesFilterInput = FilterType(FilesIrpRoadTaxesFilter);