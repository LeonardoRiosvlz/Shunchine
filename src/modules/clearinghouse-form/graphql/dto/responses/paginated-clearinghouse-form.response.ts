import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ClearinghouseFormResponse } from './clearinghouse-form.response';

@ObjectType()
export class PaginatedClearinghouseFormResponse extends PaginatedFindResultResponse(ClearinghouseFormResponse) {
}

