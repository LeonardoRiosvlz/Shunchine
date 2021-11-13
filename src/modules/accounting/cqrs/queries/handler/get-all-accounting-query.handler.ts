import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllAccountingQuery } from '../impl/get-all-accounting.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { AccountingEntityService } from '../../../services/accounting-entity.service';

@QueryHandler(GetAllAccountingQuery)
export class GetAllAccountingQueryHandler extends GetAllQueryHandler<AccountingEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AccountingEntityService.name)
  }

}
