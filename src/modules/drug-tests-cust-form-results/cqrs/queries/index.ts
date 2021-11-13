import { GetAllDrugTestsCustFormResultsQueryHandler } from './handler/get-all-drug-tests-cust-form-results-query.handler';
import { GetPaginatedDrugTestsCustFormResultsQueryHandler } from './handler/get-paginated-drug-tests-cust-form-results-query.handler';
import { GetOneDrugTestsCustFormResultsQueryHandler } from './handler/get-one-drug-tests-cust-form-results-query.handler';
import { Provider } from '@nestjs/common';

export const DrugTestsCustFormResultsQueryHandlers:Array<Provider> = [
  GetAllDrugTestsCustFormResultsQueryHandler,
  GetPaginatedDrugTestsCustFormResultsQueryHandler,
  GetOneDrugTestsCustFormResultsQueryHandler,
];
