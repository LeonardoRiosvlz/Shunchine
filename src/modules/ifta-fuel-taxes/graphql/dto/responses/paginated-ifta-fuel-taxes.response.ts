import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { IftaFuelTaxesResponse } from './ifta-fuel-taxes.response';

@ObjectType()
export class PaginatedIftaFuelTaxesResponse extends PaginatedFindResultResponse(IftaFuelTaxesResponse) {
}

