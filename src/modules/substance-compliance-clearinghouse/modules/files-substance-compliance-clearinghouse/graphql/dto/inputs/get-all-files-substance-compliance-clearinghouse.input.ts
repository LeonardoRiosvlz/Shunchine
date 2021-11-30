import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesSubstanceComplianceClearinghouseInput } from './order-by-files-substance-compliance-clearinghouse.input';
import { FilesSubstanceComplianceClearinghouseFilter, FilesSubstanceComplianceClearinghouseFilterInput } from './files-substance-compliance-clearinghouse-filter.input';

@InputType()
export class GetAllFilesSubstanceComplianceClearinghouseInput {
  @Field(() => FilesSubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<FilesSubstanceComplianceClearinghouseFilter>;
  @Field(() => OrderByFilesSubstanceComplianceClearinghouseInput, {nullable: true} )  orderBy?: OrderByFilesSubstanceComplianceClearinghouseInput;
}
