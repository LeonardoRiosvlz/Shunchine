import { Field, InputType } from '@nestjs/graphql';
import { DriverFilesFilter, DriverFilesFilterInput } from './driver-files-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneDriverFilesInput {
  @Field(() => DriverFilesFilterInput, {nullable: true} )  where?: Filter<DriverFilesFilter>;
}
