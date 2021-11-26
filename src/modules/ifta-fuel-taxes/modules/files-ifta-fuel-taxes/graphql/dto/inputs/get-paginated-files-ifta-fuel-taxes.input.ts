import { Field, InputType } from '@nestjs/graphql';
import { FilesIftaFuelTaxesFilter,FilesIftaFuelTaxesFilterInput } from './files-ifta-fuel-taxes-filter.input';
import { OrderByFilesIftaFuelTaxesInput } from './order-by-files-ifta-fuel-taxes.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesIftaFuelTaxesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesIftaFuelTaxesFilterInput, {nullable: true} )  where?: Filter<FilesIftaFuelTaxesFilter>;
  @Field(() => OrderByFilesIftaFuelTaxesInput, {nullable: true} )  orderBy?: OrderByFilesIftaFuelTaxesInput;
}
