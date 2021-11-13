import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { SubstanceComplianceClearinghouseResponse } from './substance-compliance-clearinghouse.response';

@ObjectType()
export class PaginatedSubstanceComplianceClearinghouseResponse extends PaginatedFindResultResponse(SubstanceComplianceClearinghouseResponse) {
}

