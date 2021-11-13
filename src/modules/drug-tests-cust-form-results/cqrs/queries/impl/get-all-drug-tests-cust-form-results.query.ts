import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDrugTestsCustFormResultsQuery extends GetAllQuery<DrugTestsCustFormResultsEntity>{
  constructor(public request: GetAllDto<DrugTestsCustFormResultsEntity>) {
    super(request)
  }
}
