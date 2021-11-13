import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDrugTestsCustFormResultsQuery extends GetPaginatedQuery<DrugTestsCustFormResultsEntity>{
  constructor(public request: GetPaginatedDto<DrugTestsCustFormResultsEntity>) {
    super(request)
  }
}
