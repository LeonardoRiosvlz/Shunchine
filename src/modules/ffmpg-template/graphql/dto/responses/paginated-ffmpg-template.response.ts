import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FfmpgTemplateResponse } from './ffmpg-template.response';

@ObjectType()
export class PaginatedFfmpgTemplateResponse extends PaginatedFindResultResponse(FfmpgTemplateResponse) {
}

