import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllInvoicesAndPaymentsQuery } from '../impl/get-all-invoices-and-payments.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';

@QueryHandler(GetAllInvoicesAndPaymentsQuery)
export class GetAllInvoicesAndPaymentsQueryHandler extends GetAllQueryHandler<InvoicesAndPaymentsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, InvoicesAndPaymentsEntityService.name)
  }

}
