import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';

@ObjectType()
export class SubstanceComplianceClearinghouseFilter implements IEntityFilter<SubstanceComplianceClearinghouseEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) drugRandomEnrollment?: string;
  @FilterableField(()=>String, { nullable: true}) reasonableSuspicious?: string;
  @FilterableField(()=>String, { nullable: true }) clearingHouseLogin?: string;
  @FilterableField(()=>String, { nullable: true}) clearingHousePassword?: string;
  @FilterableField(()=>String, { nullable: true }) clearingHouseRegQueries?: string;
  @FilterableField(()=>String, { nullable: true}) otherSubstanceRequest?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const SubstanceComplianceClearinghouseFilterInput = FilterType(SubstanceComplianceClearinghouseFilter);