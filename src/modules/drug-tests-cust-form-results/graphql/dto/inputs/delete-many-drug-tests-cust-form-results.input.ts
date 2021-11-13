import { Field, InputType, ID } from '@nestjs/graphql';
import { DrugTestsCustFormResultsFilter, DrugTestsCustFormResultsFilterInput } from './drug-tests-cust-form-results-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyDrugTestsCustFormResultsInput {
  @Field(() => DrugTestsCustFormResultsFilterInput, {nullable: true} )  where?: Filter<DrugTestsCustFormResultsFilter>;
}
