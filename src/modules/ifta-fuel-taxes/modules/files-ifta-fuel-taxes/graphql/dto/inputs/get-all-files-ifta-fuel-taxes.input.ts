import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesIftaFuelTaxesInput } from './order-by-files-ifta-fuel-taxes.input';
import { FilesIftaFuelTaxesFilter, FilesIftaFuelTaxesFilterInput } from './files-ifta-fuel-taxes-filter.input';

@InputType()
export class GetAllFilesIftaFuelTaxesInput {
  @Field(() => FilesIftaFuelTaxesFilterInput, {nullable: true} )  where?: Filter<FilesIftaFuelTaxesFilter>;
  @Field(() => OrderByFilesIftaFuelTaxesInput, {nullable: true} )  orderBy?: OrderByFilesIftaFuelTaxesInput;
}
