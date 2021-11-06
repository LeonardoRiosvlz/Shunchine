import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FfmpgOptionResponse } from './ffmpg-option.response';

@ObjectType()
export class PaginatedFfmpgOptionResponse extends PaginatedFindResultResponse(FfmpgOptionResponse) {
}

