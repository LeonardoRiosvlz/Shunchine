import { Field, InputType } from '@nestjs/graphql';
import { FilesDotInfoFilter, FilesDotInfoFilterInput } from './files-dot-info-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesDotInfoInput {
  @Field(() => FilesDotInfoFilterInput, {nullable: true} )  where?: Filter<FilesDotInfoFilter>;
}
