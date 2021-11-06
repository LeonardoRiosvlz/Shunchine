import { Field, InputType } from '@nestjs/graphql';
import { FfmpgTemplateFilter, FfmpgTemplateFilterInput } from './ffmpg-template-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFfmpgTemplateInput {
  @Field(() => FfmpgTemplateFilterInput, {nullable: true} )  where?: Filter<FfmpgTemplateFilter>;
}
