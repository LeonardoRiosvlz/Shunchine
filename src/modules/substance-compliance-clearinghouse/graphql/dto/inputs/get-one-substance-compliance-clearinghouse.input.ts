import { Field, InputType } from '@nestjs/graphql';
import { SubstanceComplianceClearinghouseFilter, SubstanceComplianceClearinghouseFilterInput } from './substance-compliance-clearinghouse-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneSubstanceComplianceClearinghouseInput {
  @Field(() => SubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<SubstanceComplianceClearinghouseFilter>;
}
