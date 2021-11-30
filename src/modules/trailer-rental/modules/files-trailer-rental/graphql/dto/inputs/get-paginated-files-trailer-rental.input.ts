import { Field, InputType } from '@nestjs/graphql';
import { FilesTrailerRentalFilter,FilesTrailerRentalFilterInput } from './files-trailer-rental-filter.input';
import { OrderByFilesTrailerRentalInput } from './order-by-files-trailer-rental.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesTrailerRentalInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesTrailerRentalFilterInput, {nullable: true} )  where?: Filter<FilesTrailerRentalFilter>;
  @Field(() => OrderByFilesTrailerRentalInput, {nullable: true} )  orderBy?: OrderByFilesTrailerRentalInput;
}
