import { Field, InputType } from '@nestjs/graphql';
import { FfmpgTemplateFilter,FfmpgTemplateFilterInput } from './ffmpg-template-filter.input';
import { OrderByFfmpgTemplateInput } from './order-by-ffmpg-template.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFfmpgTemplateInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FfmpgTemplateFilterInput, {nullable: true} )  where?: Filter<FfmpgTemplateFilter>;
  @Field(() => OrderByFfmpgTemplateInput, {nullable: true} )  orderBy?: OrderByFfmpgTemplateInput;
}
