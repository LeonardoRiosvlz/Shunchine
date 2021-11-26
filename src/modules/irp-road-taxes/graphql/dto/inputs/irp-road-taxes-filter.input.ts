import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';

@ObjectType()
export class IrpRoadTaxesFilter implements IEntityFilter<IrpRoadTaxesEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) client?: string;
  @FilterableField(()=>String, { nullable: true }) number?: string;
  @FilterableField(()=>String, { nullable: true }) documentType?: string;
  @FilterableField(()=>String, { nullable: true }) notes?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const IrpRoadTaxesFilterInput = FilterType(IrpRoadTaxesFilter);