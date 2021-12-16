import { Field, InputType } from '@nestjs/graphql';
import { RoadTaxesFormFilter,RoadTaxesFormFilterInput } from './road-taxes-form-filter.input';
import { OrderByRoadTaxesFormInput } from './order-by-road-taxes-form.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedRoadTaxesFormInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => RoadTaxesFormFilterInput, {nullable: true} )  where?: Filter<RoadTaxesFormFilter>;
  @Field(() => OrderByRoadTaxesFormInput, {nullable: true} )  orderBy?: OrderByRoadTaxesFormInput;
}
