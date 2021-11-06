import { Field, InputType } from '@nestjs/graphql';
import { FfmpgOptionFilter,FfmpgOptionFilterInput } from './ffmpg-option-filter.input';
import { OrderByFfmpgOptionInput } from './order-by-ffmpg-option.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFfmpgOptionInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FfmpgOptionFilterInput, {nullable: true} )  where?: Filter<FfmpgOptionFilter>;
  @Field(() => OrderByFfmpgOptionInput, {nullable: true} )  orderBy?: OrderByFfmpgOptionInput;
}
