import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDriverFilesInput } from './order-by-driver-files.input';
import { DriverFilesFilter, DriverFilesFilterInput } from './driver-files-filter.input';

@InputType()
export class GetAllDriverFilesInput {
  @Field(() => DriverFilesFilterInput, {nullable: true} )  where?: Filter<DriverFilesFilter>;
  @Field(() => OrderByDriverFilesInput, {nullable: true} )  orderBy?: OrderByDriverFilesInput;
}
