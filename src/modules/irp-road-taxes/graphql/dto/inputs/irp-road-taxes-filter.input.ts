import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';

@ObjectType()
export class IrpRoadTaxesFilter implements IEntityFilter<IrpRoadTaxesEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) irpAccount?: string;
  @FilterableField(()=>String, { nullable: true}) certificateTitle?: string;
  @FilterableField(()=>String, { nullable: true }) tag?: string;
  @FilterableField(()=>String, { nullable: true}) roadTax?: string;
  @FilterableField(()=>String, { nullable: true }) leaseAgreement?: string;
  @FilterableField(()=>String, { nullable: true}) irpApplicationsRenewals?: string;
  @FilterableField(()=>String, { nullable: true }) otherIrpRequest?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const IrpRoadTaxesFilterInput = FilterType(IrpRoadTaxesFilter);