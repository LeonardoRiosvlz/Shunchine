import { Field, InputType, ID } from '@nestjs/graphql';
import { FilesCorporationEinFilter, FilesCorporationEinFilterInput } from './files-corporation-ein-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFilesCorporationEinInput {
  @Field(() => FilesCorporationEinFilterInput, {nullable: true} )  where?: Filter<FilesCorporationEinFilter>;
}
