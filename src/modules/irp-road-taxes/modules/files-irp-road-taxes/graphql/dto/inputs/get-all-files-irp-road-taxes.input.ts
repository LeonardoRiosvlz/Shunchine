import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesIrpRoadTaxesInput } from './order-by-files-irp-road-taxes.input';
import { FilesIrpRoadTaxesFilter, FilesIrpRoadTaxesFilterInput } from './files-irp-road-taxes-filter.input';

@InputType()
export class GetAllFilesIrpRoadTaxesInput {
  @Field(() => FilesIrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<FilesIrpRoadTaxesFilter>;
  @Field(() => OrderByFilesIrpRoadTaxesInput, {nullable: true} )  orderBy?: OrderByFilesIrpRoadTaxesInput;
}
