import { Field, InputType } from '@nestjs/graphql';
import { FilesCorporationEinFilter,FilesCorporationEinFilterInput } from './files-corporation-ein-filter.input';
import { OrderByFilesCorporationEinInput } from './order-by-files-corporation-ein.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesCorporationEinInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesCorporationEinFilterInput, {nullable: true} )  where?: Filter<FilesCorporationEinFilter>;
  @Field(() => OrderByFilesCorporationEinInput, {nullable: true} )  orderBy?: OrderByFilesCorporationEinInput;
}
