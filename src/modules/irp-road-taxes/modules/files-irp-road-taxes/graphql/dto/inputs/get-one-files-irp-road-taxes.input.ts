import { Field, InputType } from '@nestjs/graphql';
import { FilesIrpRoadTaxesFilter, FilesIrpRoadTaxesFilterInput } from './files-irp-road-taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesIrpRoadTaxesInput {
  @Field(() => FilesIrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<FilesIrpRoadTaxesFilter>;
}
