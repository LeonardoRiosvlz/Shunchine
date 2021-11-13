import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DrugTestsCustFormResultsResponse } from './drug-tests-cust-form-results.response';

@ObjectType()
export class PaginatedDrugTestsCustFormResultsResponse extends PaginatedFindResultResponse(DrugTestsCustFormResultsResponse) {
}

