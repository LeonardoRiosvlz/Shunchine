import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ClientResponse } from './client.response';

@ObjectType()
export class PaginatedClientResponse extends PaginatedFindResultResponse(ClientResponse) {
}

