import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesTrailerRentalInput } from './order-by-files-trailer-rental.input';
import { FilesTrailerRentalFilter, FilesTrailerRentalFilterInput } from './files-trailer-rental-filter.input';

@InputType()
export class GetAllFilesTrailerRentalInput {
  @Field(() => FilesTrailerRentalFilterInput, {nullable: true} )  where?: Filter<FilesTrailerRentalFilter>;
  @Field(() => OrderByFilesTrailerRentalInput, {nullable: true} )  orderBy?: OrderByFilesTrailerRentalInput;
}
