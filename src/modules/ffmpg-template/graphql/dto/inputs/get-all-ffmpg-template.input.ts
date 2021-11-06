import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFfmpgTemplateInput } from './order-by-ffmpg-template.input';
import { FfmpgTemplateFilter, FfmpgTemplateFilterInput } from './ffmpg-template-filter.input';

@InputType()
export class GetAllFfmpgTemplateInput {
  @Field(() => FfmpgTemplateFilterInput, {nullable: true} )  where?: Filter<FfmpgTemplateFilter>;
  @Field(() => OrderByFfmpgTemplateInput, {nullable: true} )  orderBy?: OrderByFfmpgTemplateInput;
}
