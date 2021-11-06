import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFfmpgOptionInput } from './order-by-ffmpg-option.input';
import { FfmpgOptionFilter, FfmpgOptionFilterInput } from './ffmpg-option-filter.input';

@InputType()
export class GetAllFfmpgOptionInput {
  @Field(() => FfmpgOptionFilterInput, {nullable: true} )  where?: Filter<FfmpgOptionFilter>;
  @Field(() => OrderByFfmpgOptionInput, {nullable: true} )  orderBy?: OrderByFfmpgOptionInput;
}
