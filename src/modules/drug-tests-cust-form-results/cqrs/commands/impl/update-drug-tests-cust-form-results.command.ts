import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';

export class UpdateDrugTestsCustFormResultsCommand extends UpdateCommand<DrugTestsCustFormResultsEntity> {
  constructor(public entityId: string, update: Partial<DrugTestsCustFormResultsEntity>) {
    super({entityId, update});
  }
}
