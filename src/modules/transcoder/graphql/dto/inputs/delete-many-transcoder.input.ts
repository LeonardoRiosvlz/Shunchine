import { Field, InputType, ID } from '@nestjs/graphql';
import { TranscoderFilter, TranscoderFilterInput } from './transcoder-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyTranscoderInput {
  @Field(() => TranscoderFilterInput, {nullable: true} )  where?: Filter<TranscoderFilter>;
}
