import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { YardRentalResponse } from './yard-rental.response';

@ObjectType()
export class PaginatedYardRentalResponse extends PaginatedFindResultResponse(YardRentalResponse) {
}

