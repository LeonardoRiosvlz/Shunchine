import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';

@ObjectType()
export class FilesAnnualVehIspFilter implements IEntityFilter<FilesAnnualVehIspEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) annualVehInsp?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FilesAnnualVehIspFilterInput = FilterType(FilesAnnualVehIspFilter);