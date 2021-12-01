import { Field, InputType } from '@nestjs/graphql';
import { FilesYardRentalFilter,FilesYardRentalFilterInput } from './files-yard-rental-filter.input';
import { OrderByFilesYardRentalInput } from './order-by-files-yard-rental.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesYardRentalInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesYardRentalFilterInput, {nullable: true} )  where?: Filter<FilesYardRentalFilter>;
  @Field(() => OrderByFilesYardRentalInput, {nullable: true} )  orderBy?: OrderByFilesYardRentalInput;
}
