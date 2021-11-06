import { Field, InputType } from '@nestjs/graphql';
import { FfmpgOptionFilter, FfmpgOptionFilterInput } from './ffmpg-option-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFfmpgOptionInput {
  @Field(() => FfmpgOptionFilterInput, {nullable: true} )  where?: Filter<FfmpgOptionFilter>;
}
