import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DriverFilesResponse } from './driver-files.response';

@ObjectType()
export class PaginatedDriverFilesResponse extends PaginatedFindResultResponse(DriverFilesResponse) {
}

