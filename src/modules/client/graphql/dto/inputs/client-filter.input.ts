import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClientEntity } from '../../../entities/client.entity';

@ObjectType()
export class ClientFilter implements IEntityFilter<ClientEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) clientSince?: string;
  @FilterableField(()=>String, { nullable: true}) customerName?: string;
  @FilterableField(()=>String, { nullable: true }) tax?: string;
  @FilterableField(()=>String, { nullable: true }) mc?: string;
  @FilterableField(()=>String, { nullable: true}) ofTrucks?: string;
  @FilterableField(()=>String, { nullable: true }) street?: string;
  @FilterableField(()=>String, { nullable: true }) city?: string;
  @FilterableField(()=>String, { nullable: true }) contactEmail?: string;
  @FilterableField(()=>String, { nullable: true }) dot?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ClientFilterInput = FilterType(ClientFilter);