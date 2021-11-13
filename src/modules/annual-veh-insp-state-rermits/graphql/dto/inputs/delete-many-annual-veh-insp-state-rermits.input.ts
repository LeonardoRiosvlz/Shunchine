import { Field, InputType, ID } from '@nestjs/graphql';
import { AnnualVehInspStateRermitsFilter, AnnualVehInspStateRermitsFilterInput } from './annual-veh-insp-state-rermits-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyAnnualVehInspStateRermitsInput {
  @Field(() => AnnualVehInspStateRermitsFilterInput, {nullable: true} )  where?: Filter<AnnualVehInspStateRermitsFilter>;
}
