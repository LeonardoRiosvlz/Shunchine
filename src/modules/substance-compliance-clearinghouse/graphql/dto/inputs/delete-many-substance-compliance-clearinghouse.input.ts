import { Field, InputType, ID } from '@nestjs/graphql';
import { SubstanceComplianceClearinghouseFilter, SubstanceComplianceClearinghouseFilterInput } from './substance-compliance-clearinghouse-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManySubstanceComplianceClearinghouseInput {
  @Field(() => SubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<SubstanceComplianceClearinghouseFilter>;
}
