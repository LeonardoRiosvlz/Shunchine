import { Field, InputType } from '@nestjs/graphql';
import { DriverFilesFilter,DriverFilesFilterInput } from './driver-files-filter.input';
import { OrderByDriverFilesInput } from './order-by-driver-files.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDriverFilesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DriverFilesFilterInput, {nullable: true} )  where?: Filter<DriverFilesFilter>;
  @Field(() => OrderByDriverFilesInput, {nullable: true} )  orderBy?: OrderByDriverFilesInput;
}
