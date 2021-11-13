import { Field, InputType } from '@nestjs/graphql';
import { SubstanceComplianceClearinghouseFilter,SubstanceComplianceClearinghouseFilterInput } from './substance-compliance-clearinghouse-filter.input';
import { OrderBySubstanceComplianceClearinghouseInput } from './order-by-substance-compliance-clearinghouse.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedSubstanceComplianceClearinghouseInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => SubstanceComplianceClearinghouseFilterInput, {nullable: true} )  where?: Filter<SubstanceComplianceClearinghouseFilter>;
  @Field(() => OrderBySubstanceComplianceClearinghouseInput, {nullable: true} )  orderBy?: OrderBySubstanceComplianceClearinghouseInput;
}
