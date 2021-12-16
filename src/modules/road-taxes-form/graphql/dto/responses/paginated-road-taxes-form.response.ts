import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { RoadTaxesFormResponse } from './road-taxes-form.response';

@ObjectType()
export class PaginatedRoadTaxesFormResponse extends PaginatedFindResultResponse(RoadTaxesFormResponse) {
}

