import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';

@ObjectType()
export class SubstanceComplianceClearinghouseFilter implements IEntityFilter<SubstanceComplianceClearinghouseEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) client?: string;
  @FilterableField(()=>String, { nullable: true }) expiration?: string;
  @FilterableField(()=>String, { nullable: true }) expires?: string;
  @FilterableField(()=>String, { nullable: true }) archived?: string;
  @FilterableField(()=>String, { nullable: true }) number?: string;
  @FilterableField(()=>String, { nullable: true }) notes?: string;
  @FilterableField(()=>String, { nullable: true }) description?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const SubstanceComplianceClearinghouseFilterInput = FilterType(SubstanceComplianceClearinghouseFilter);