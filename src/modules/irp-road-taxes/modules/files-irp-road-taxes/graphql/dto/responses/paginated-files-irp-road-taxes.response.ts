import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesIrpRoadTaxesResponse } from './files-irp-road-taxes.response';

@ObjectType()
export class PaginatedFilesIrpRoadTaxesResponse extends PaginatedFindResultResponse(FilesIrpRoadTaxesResponse) {
}

