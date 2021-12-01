import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesYardRentalInput } from './order-by-files-yard-rental.input';
import { FilesYardRentalFilter, FilesYardRentalFilterInput } from './files-yard-rental-filter.input';

@InputType()
export class GetAllFilesYardRentalInput {
  @Field(() => FilesYardRentalFilterInput, {nullable: true} )  where?: Filter<FilesYardRentalFilter>;
  @Field(() => OrderByFilesYardRentalInput, {nullable: true} )  orderBy?: OrderByFilesYardRentalInput;
}
