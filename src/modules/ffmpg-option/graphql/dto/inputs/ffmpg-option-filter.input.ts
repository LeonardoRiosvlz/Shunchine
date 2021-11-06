import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';

@ObjectType()
export class FfmpgOptionFilter implements IEntityFilter<FfmpgOptionEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) option?: string;
  @FilterableField(()=>Boolean, { nullable: true }) default?: boolean;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FfmpgOptionFilterInput = FilterType(FfmpgOptionFilter);