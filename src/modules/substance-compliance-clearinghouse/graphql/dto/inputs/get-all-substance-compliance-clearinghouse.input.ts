import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderBySubstanceComplianceClearinghouseInput } from './order-by-substance-compliance-clearinghouse.input';
import { SubstanceComplianceClearinghouseFilter, SubstanceComplianceClearinghouseFilterInput } from './substance-compliance-clearinghouse-filter.input';

@InputType()
export class GetAllSubstanceComplianceClearinghouseInput {
  @Field(() => SubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<SubstanceComplianceClearinghouseFilter>;
  @Field(() => OrderBySubstanceComplianceClearinghouseInput, {nullable: true} )  orderBy?: OrderBySubstanceComplianceClearinghouseInput;
}
