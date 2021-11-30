import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';

@ObjectType()
export class FilesSubstanceComplianceClearinghouseFilter implements IEntityFilter<FilesSubstanceComplianceClearinghouseEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) substanceComplianceClearinghouse?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FilesSubstanceComplianceClearinghouseFilterInput = FilterType(FilesSubstanceComplianceClearinghouseFilter);