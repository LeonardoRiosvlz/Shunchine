import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FinancedEquipmentResponse } from './financed-equipment.response';

@ObjectType()
export class PaginatedFinancedEquipmentResponse extends PaginatedFindResultResponse(FinancedEquipmentResponse) {
}

