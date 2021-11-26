import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesCorporationEinResponse } from './files-corporation-ein.response';

@ObjectType()
export class PaginatedFilesCorporationEinResponse extends PaginatedFindResultResponse(FilesCorporationEinResponse) {
}

