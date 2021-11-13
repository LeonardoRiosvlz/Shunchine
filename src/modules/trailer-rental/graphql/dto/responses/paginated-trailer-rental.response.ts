import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { TrailerRentalResponse } from './trailer-rental.response';

@ObjectType()
export class PaginatedTrailerRentalResponse extends PaginatedFindResultResponse(TrailerRentalResponse) {
}

