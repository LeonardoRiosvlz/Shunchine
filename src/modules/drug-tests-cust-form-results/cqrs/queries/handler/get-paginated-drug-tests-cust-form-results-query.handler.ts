import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDrugTestsCustFormResultsQuery } from '../impl/get-paginated-drug-tests-cust-form-results.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';

@QueryHandler(GetPaginatedDrugTestsCustFormResultsQuery)
export class GetPaginatedDrugTestsCustFormResultsQueryHandler extends GetPaginatedQueryHandler<DrugTestsCustFormResultsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DrugTestsCustFormResultsEntityService.name)
  }

}
