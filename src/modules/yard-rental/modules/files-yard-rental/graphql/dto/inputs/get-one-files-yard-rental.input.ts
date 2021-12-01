import { Field, InputType } from '@nestjs/graphql';
import { FilesYardRentalFilter, FilesYardRentalFilterInput } from './files-yard-rental-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesYardRentalInput {
  @Field(() => FilesYardRentalFilterInput, {nullable: true} )  where?: Filter<FilesYardRentalFilter>;
}
