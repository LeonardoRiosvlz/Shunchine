import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';

@ObjectType()
export class TrailerRentalFilter implements IEntityFilter<TrailerRentalEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) client?: string;
  @FilterableField(()=>String, { nullable: true }) unit?: string;
  @FilterableField(()=>String, { nullable: true}) vin?: string;
  @FilterableField(()=>String, { nullable: true }) tag?: string;
  @FilterableField(()=>String, { nullable: true }) year?: string;
  @FilterableField(()=>String, { nullable: true}) make?: string;
  @FilterableField(()=>String, { nullable: true }) model?: string;
  @FilterableField(()=>String, { nullable: true }) rentalDate?: string;
  @FilterableField(()=>String, { nullable: true}) rentalAmount?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const TrailerRentalFilterInput = FilterType(TrailerRentalFilter);
