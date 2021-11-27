import { Field, InputType } from '@nestjs/graphql';
import { FilesDotInfoFilter,FilesDotInfoFilterInput } from './files-dot-info-filter.input';
import { OrderByFilesDotInfoInput } from './order-by-files-dot-info.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesDotInfoInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesDotInfoFilterInput, {nullable: true} )  where?: Filter<FilesDotInfoFilter>;
  @Field(() => OrderByFilesDotInfoInput, {nullable: true} )  orderBy?: OrderByFilesDotInfoInput;
}
