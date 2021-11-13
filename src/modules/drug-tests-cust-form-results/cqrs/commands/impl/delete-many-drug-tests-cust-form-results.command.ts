import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDrugTestsCustFormResultsCommand extends DeleteManyCommand<DrugTestsCustFormResultsEntity>{
  constructor(public request: GetOneDto<DrugTestsCustFormResultsEntity>) {
    super(request)
  }
}
