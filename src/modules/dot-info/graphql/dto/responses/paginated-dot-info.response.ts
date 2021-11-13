import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DotInfoResponse } from './dot-info.response';

@ObjectType()
export class PaginatedDotInfoResponse extends PaginatedFindResultResponse(DotInfoResponse) {
}

