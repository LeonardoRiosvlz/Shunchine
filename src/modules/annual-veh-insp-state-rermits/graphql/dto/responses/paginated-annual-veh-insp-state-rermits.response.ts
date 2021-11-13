import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { AnnualVehInspStateRermitsResponse } from './annual-veh-insp-state-rermits.response';

@ObjectType()
export class PaginatedAnnualVehInspStateRermitsResponse extends PaginatedFindResultResponse(AnnualVehInspStateRermitsResponse) {
}

