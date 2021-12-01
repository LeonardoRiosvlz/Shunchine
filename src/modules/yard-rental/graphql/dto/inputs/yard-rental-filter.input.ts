import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';

@ObjectType()
export class YardRentalFilter implements IEntityFilter<YardRentalEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) client?: string;
  @FilterableField(()=>String, { nullable: true}) truck?: string;
  @FilterableField(()=>String, { nullable: true }) truckColor?: string;
  @FilterableField(()=>String, { nullable: true}) tag?: string;
  @FilterableField(()=>String, { nullable: true }) rentalDate?: string;
  @FilterableField(()=>String, { nullable: true}) rentalAmount?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const YardRentalFilterInput = FilterType(YardRentalFilter);
