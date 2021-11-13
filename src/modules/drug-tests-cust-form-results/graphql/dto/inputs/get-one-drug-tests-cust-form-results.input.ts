import { Field, InputType } from '@nestjs/graphql';
import { DrugTestsCustFormResultsFilter, DrugTestsCustFormResultsFilterInput } from './drug-tests-cust-form-results-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneDrugTestsCustFormResultsInput {
  @Field(() => DrugTestsCustFormResultsFilterInput, {nullable: true} )  where?: Filter<DrugTestsCustFormResultsFilter>;
}
