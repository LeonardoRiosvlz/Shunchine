import { Field, InputType } from '@nestjs/graphql';
import { FilesIftaFuelTaxesFilter, FilesIftaFuelTaxesFilterInput } from './files-ifta-fuel-taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesIftaFuelTaxesInput {
  @Field(() => FilesIftaFuelTaxesFilterInput, {nullable: true} )  where?: Filter<FilesIftaFuelTaxesFilter>;
}
