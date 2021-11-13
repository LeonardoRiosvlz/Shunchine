import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDrugTestsCustFormResultsInput } from './order-by-drug-tests-cust-form-results.input';
import { DrugTestsCustFormResultsFilter, DrugTestsCustFormResultsFilterInput } from './drug-tests-cust-form-results-filter.input';

@InputType()
export class GetAllDrugTestsCustFormResultsInput {
  @Field(() => DrugTestsCustFormResultsFilterInput, {nullable: true} )  where?: Filter<DrugTestsCustFormResultsFilter>;
  @Field(() => OrderByDrugTestsCustFormResultsInput, {nullable: true} )  orderBy?: OrderByDrugTestsCustFormResultsInput;
}
