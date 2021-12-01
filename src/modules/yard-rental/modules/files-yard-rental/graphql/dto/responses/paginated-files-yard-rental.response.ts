import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesYardRentalResponse } from './files-yard-rental.response';

@ObjectType()
export class PaginatedFilesYardRentalResponse extends PaginatedFindResultResponse(FilesYardRentalResponse) {
}

