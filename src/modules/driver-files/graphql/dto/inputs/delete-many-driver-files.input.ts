import { Field, InputType, ID } from '@nestjs/graphql';
import { DriverFilesFilter, DriverFilesFilterInput } from './driver-files-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyDriverFilesInput {
  @Field(() => DriverFilesFilterInput, {nullable: true} )  where?: Filter<DriverFilesFilter>;
}
