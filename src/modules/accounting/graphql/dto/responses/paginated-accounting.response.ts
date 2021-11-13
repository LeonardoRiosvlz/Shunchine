import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { AccountingResponse } from './accounting.response';

@ObjectType()
export class PaginatedAccountingResponse extends PaginatedFindResultResponse(AccountingResponse) {
}

