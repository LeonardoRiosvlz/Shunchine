import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesFinancedEquipmentResponse } from './files-financed-equipment.response';

@ObjectType()
export class PaginatedFilesFinancedEquipmentResponse extends PaginatedFindResultResponse(FilesFinancedEquipmentResponse) {
}

