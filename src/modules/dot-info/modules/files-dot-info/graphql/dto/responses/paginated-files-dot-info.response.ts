import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesDotInfoResponse } from './files-dot-info.response';

@ObjectType()
export class PaginatedFilesDotInfoResponse extends PaginatedFindResultResponse(FilesDotInfoResponse) {
}

