import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { CorporationEinResponse } from './corporation-ein.response';

@ObjectType()
export class PaginatedCorporationEinResponse extends PaginatedFindResultResponse(CorporationEinResponse) {
}

