import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesDotInfoInput } from './order-by-files-dot-info.input';
import { FilesDotInfoFilter, FilesDotInfoFilterInput } from './files-dot-info-filter.input';

@InputType()
export class GetAllFilesDotInfoInput {
  @Field(() => FilesDotInfoFilterInput, {nullable: true} )  where?: Filter<FilesDotInfoFilter>;
  @Field(() => OrderByFilesDotInfoInput, {nullable: true} )  orderBy?: OrderByFilesDotInfoInput;
}
