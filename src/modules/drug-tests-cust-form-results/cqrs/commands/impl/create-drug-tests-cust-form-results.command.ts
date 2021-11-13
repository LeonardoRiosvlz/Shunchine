import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';

export class CreateDrugTestsCustFormResultsCommand extends CreateCommand<DrugTestsCustFormResultsEntity> {
  constructor(public request: DrugTestsCustFormResultsEntity) {
    super(request);
  }
}
