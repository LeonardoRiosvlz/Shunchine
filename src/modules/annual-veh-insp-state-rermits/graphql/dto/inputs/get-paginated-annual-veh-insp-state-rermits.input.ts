import { Field, InputType } from '@nestjs/graphql';
import { AnnualVehInspStateRermitsFilter,AnnualVehInspStateRermitsFilterInput } from './annual-veh-insp-state-rermits-filter.input';
import { OrderByAnnualVehInspStateRermitsInput } from './order-by-annual-veh-insp-state-rermits.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedAnnualVehInspStateRermitsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => AnnualVehInspStateRermitsFilterInput, {nullable: true} )  where?: Filter<AnnualVehInspStateRermitsFilter>;
  @Field(() => OrderByAnnualVehInspStateRermitsInput, {nullable: true} )  orderBy?: OrderByAnnualVehInspStateRermitsInput;
}
