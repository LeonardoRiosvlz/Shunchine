import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesTrailerRentalResponse } from './files-trailer-rental.response';

@ObjectType()
export class PaginatedFilesTrailerRentalResponse extends PaginatedFindResultResponse(FilesTrailerRentalResponse) {
}

