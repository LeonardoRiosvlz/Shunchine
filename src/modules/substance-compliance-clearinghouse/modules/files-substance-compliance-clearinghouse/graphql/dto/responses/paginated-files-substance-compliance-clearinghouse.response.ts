import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesSubstanceComplianceClearinghouseResponse } from './files-substance-compliance-clearinghouse.response';

@ObjectType()
export class PaginatedFilesSubstanceComplianceClearinghouseResponse extends PaginatedFindResultResponse(FilesSubstanceComplianceClearinghouseResponse) {
}

