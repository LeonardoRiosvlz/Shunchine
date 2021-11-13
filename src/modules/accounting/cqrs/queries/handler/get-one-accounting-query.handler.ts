import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneAccountingQuery } from '../impl/get-one-accounting.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { AccountingEntityService } from '../../../services/accounting-entity.service';

@QueryHandler(GetOneAccountingQuery)
export class GetOneAccountingQueryHandler extends GetOneQueryHandler<AccountingEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AccountingEntityService.name)
  }
}

