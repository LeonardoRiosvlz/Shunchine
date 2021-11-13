import { CreateDrugTestsCustFormResultsCommandHandler } from './handler/create-drug-tests-cust-form-results-command.handler';
import { DeleteDrugTestsCustFormResultsCommandHandler } from './handler/delete-drug-tests-cust-form-results-command.handler';
import { UpdateDrugTestsCustFormResultsCommandHandler } from './handler/update-drug-tests-cust-form-results-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDrugTestsCustFormResultsCommandHandler } from './handler/delete-many-drug-tests-cust-form-results-command.handler';

export const DrugTestsCustFormResultsCommandHandlers: Array<Provider> = [
  CreateDrugTestsCustFormResultsCommandHandler,
  DeleteDrugTestsCustFormResultsCommandHandler,
  UpdateDrugTestsCustFormResultsCommandHandler,
  DeleteManyDrugTestsCustFormResultsCommandHandler
];
