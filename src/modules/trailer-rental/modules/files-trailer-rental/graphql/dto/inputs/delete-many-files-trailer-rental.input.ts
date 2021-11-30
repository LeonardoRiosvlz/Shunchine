import { Field, InputType, ID } from '@nestjs/graphql';
import { FilesTrailerRentalFilter, FilesTrailerRentalFilterInput } from './files-trailer-rental-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFilesTrailerRentalInput {
  @Field(() => FilesTrailerRentalFilterInput, {nullable: true} )  where?: Filter<FilesTrailerRentalFilter>;
}
