import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByTranscoderInput } from './order-by-transcoder.input';
import { TranscoderFilter, TranscoderFilterInput } from './transcoder-filter.input';

@InputType()
export class GetAllTranscoderInput {
  @Field(() => TranscoderFilterInput, {nullable: true} )  where?: Filter<TranscoderFilter>;
  @Field(() => OrderByTranscoderInput, {nullable: true} )  orderBy?: OrderByTranscoderInput;
}
