import { Field, InputType, ID } from '@nestjs/graphql';
import { FfmpgTemplateFilter, FfmpgTemplateFilterInput } from './ffmpg-template-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFfmpgTemplateInput {
  @Field(() => FfmpgTemplateFilterInput, {nullable: true} )  where?: Filter<FfmpgTemplateFilter>;
}
