import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedAccountingQuery } from '../impl/get-paginated-accounting.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { AccountingEntityService } from '../../../services/accounting-entity.service';

@QueryHandler(GetPaginatedAccountingQuery)
export class GetPaginatedAccountingQueryHandler extends GetPaginatedQueryHandler<AccountingEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AccountingEntityService.name)
  }

}
