import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDrugTestsCustFormResultsQuery extends GetOneQuery<DrugTestsCustFormResultsEntity>{
  constructor(public request: GetOneDto<DrugTestsCustFormResultsEntity>) {
    super(request)
  }
}
