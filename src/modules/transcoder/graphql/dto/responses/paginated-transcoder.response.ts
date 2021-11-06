import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { TranscoderResponse } from './transcoder.response';

@ObjectType()
export class PaginatedTranscoderResponse extends PaginatedFindResultResponse(TranscoderResponse) {
}

