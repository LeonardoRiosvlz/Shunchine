import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';

@ObjectType()
export class IftaFuelTaxesFilter implements IEntityFilter<IftaFuelTaxesEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) irpAiftaAccountccount?: string;
  @FilterableField(()=>String, { nullable: true}) iftaApplRenewalsChanges?: string;
  @FilterableField(()=>String, { nullable: true }) otherIftaRequest?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const IftaFuelTaxesFilterInput = FilterType(IftaFuelTaxesFilter);