import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneInvoicesAndPaymentsQuery } from '../impl/get-one-invoices-and-payments.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';

@QueryHandler(GetOneInvoicesAndPaymentsQuery)
export class GetOneInvoicesAndPaymentsQueryHandler extends GetOneQueryHandler<InvoicesAndPaymentsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, InvoicesAndPaymentsEntityService.name)
  }
}

