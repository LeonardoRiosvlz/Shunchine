import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { IrpRoadTaxesResponse } from './irp-road-taxes.response';

@ObjectType()
export class PaginatedIrpRoadTaxesResponse extends PaginatedFindResultResponse(IrpRoadTaxesResponse) {
}

