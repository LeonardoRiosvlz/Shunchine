import { Field, InputType } from '@nestjs/graphql';
import { FilesSubstanceComplianceClearinghouseFilter, FilesSubstanceComplianceClearinghouseFilterInput } from './files-substance-compliance-clearinghouse-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesSubstanceComplianceClearinghouseInput {
  @Field(() => FilesSubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<FilesSubstanceComplianceClearinghouseFilter>;
}
