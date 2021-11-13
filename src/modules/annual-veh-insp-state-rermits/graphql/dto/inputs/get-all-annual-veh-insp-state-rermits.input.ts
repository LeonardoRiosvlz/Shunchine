import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByAnnualVehInspStateRermitsInput } from './order-by-annual-veh-insp-state-rermits.input';
import { AnnualVehInspStateRermitsFilter, AnnualVehInspStateRermitsFilterInput } from './annual-veh-insp-state-rermits-filter.input';

@InputType()
export class GetAllAnnualVehInspStateRermitsInput {
  @Field(() => AnnualVehInspStateRermitsFilterInput, {nullable: true} )  where?: Filter<AnnualVehInspStateRermitsFilter>;
  @Field(() => OrderByAnnualVehInspStateRermitsInput, {nullable: true} )  orderBy?: OrderByAnnualVehInspStateRermitsInput;
}
