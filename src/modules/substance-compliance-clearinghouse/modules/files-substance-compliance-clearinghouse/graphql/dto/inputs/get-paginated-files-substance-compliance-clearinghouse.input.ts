import { Field, InputType } from '@nestjs/graphql';
import { FilesSubstanceComplianceClearinghouseFilter,FilesSubstanceComplianceClearinghouseFilterInput } from './files-substance-compliance-clearinghouse-filter.input';
import { OrderByFilesSubstanceComplianceClearinghouseInput } from './order-by-files-substance-compliance-clearinghouse.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesSubstanceComplianceClearinghouseInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesSubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<FilesSubstanceComplianceClearinghouseFilter>;
  @Field(() => OrderByFilesSubstanceComplianceClearinghouseInput, {nullable: true} )  orderBy?: OrderByFilesSubstanceComplianceClearinghouseInput;
}
