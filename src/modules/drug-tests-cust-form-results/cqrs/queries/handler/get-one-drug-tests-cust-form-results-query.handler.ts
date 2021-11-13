import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDrugTestsCustFormResultsQuery } from '../impl/get-one-drug-tests-cust-form-results.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';

@QueryHandler(GetOneDrugTestsCustFormResultsQuery)
export class GetOneDrugTestsCustFormResultsQueryHandler extends GetOneQueryHandler<DrugTestsCustFormResultsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DrugTestsCustFormResultsEntityService.name)
  }
}

