import { Field, InputType } from '@nestjs/graphql';
import { TranscoderFilter,TranscoderFilterInput } from './transcoder-filter.input';
import { OrderByTranscoderInput } from './order-by-transcoder.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedTranscoderInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => TranscoderFilterInput, {nullable: true} )  where?: Filter<TranscoderFilter>;
  @Field(() => OrderByTranscoderInput, {nullable: true} )  orderBy?: OrderByTranscoderInput;
}
