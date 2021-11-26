import { Field, InputType } from '@nestjs/graphql';
import { FilesIrpRoadTaxesFilter,FilesIrpRoadTaxesFilterInput } from './files-irp-road-taxes-filter.input';
import { OrderByFilesIrpRoadTaxesInput } from './order-by-files-irp-road-taxes.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesIrpRoadTaxesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesIrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<FilesIrpRoadTaxesFilter>;
  @Field(() => OrderByFilesIrpRoadTaxesInput, {nullable: true} )  orderBy?: OrderByFilesIrpRoadTaxesInput;
}
