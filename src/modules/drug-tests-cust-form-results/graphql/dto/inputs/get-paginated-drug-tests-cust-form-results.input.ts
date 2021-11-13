import { Field, InputType } from '@nestjs/graphql';
import { DrugTestsCustFormResultsFilter,DrugTestsCustFormResultsFilterInput } from './drug-tests-cust-form-results-filter.input';
import { OrderByDrugTestsCustFormResultsInput } from './order-by-drug-tests-cust-form-results.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDrugTestsCustFormResultsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DrugTestsCustFormResultsFilterInput, {nullable: true} )  where?: Filter<DrugTestsCustFormResultsFilter>;
  @Field(() => OrderByDrugTestsCustFormResultsInput, {nullable: true} )  orderBy?: OrderByDrugTestsCustFormResultsInput;
}
