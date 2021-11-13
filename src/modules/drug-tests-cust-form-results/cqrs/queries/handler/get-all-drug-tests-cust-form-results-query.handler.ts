import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDrugTestsCustFormResultsQuery } from '../impl/get-all-drug-tests-cust-form-results.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';

@QueryHandler(GetAllDrugTestsCustFormResultsQuery)
export class GetAllDrugTestsCustFormResultsQueryHandler extends GetAllQueryHandler<DrugTestsCustFormResultsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DrugTestsCustFormResultsEntityService.name)
  }

}
