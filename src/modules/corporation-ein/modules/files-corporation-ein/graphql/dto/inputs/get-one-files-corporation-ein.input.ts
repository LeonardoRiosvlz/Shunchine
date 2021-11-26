import { Field, InputType } from '@nestjs/graphql';
import { FilesCorporationEinFilter, FilesCorporationEinFilterInput } from './files-corporation-ein-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesCorporationEinInput {
  @Field(() => FilesCorporationEinFilterInput, {nullable: true} )  where?: Filter<FilesCorporationEinFilter>;
}
