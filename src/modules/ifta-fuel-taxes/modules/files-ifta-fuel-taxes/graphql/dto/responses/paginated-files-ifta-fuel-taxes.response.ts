import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesIftaFuelTaxesResponse } from './files-ifta-fuel-taxes.response';

@ObjectType()
export class PaginatedFilesIftaFuelTaxesResponse extends PaginatedFindResultResponse(FilesIftaFuelTaxesResponse) {
}

