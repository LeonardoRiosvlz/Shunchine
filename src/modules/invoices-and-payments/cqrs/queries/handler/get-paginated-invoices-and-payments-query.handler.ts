import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedInvoicesAndPaymentsQuery } from '../impl/get-paginated-invoices-and-payments.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';

@QueryHandler(GetPaginatedInvoicesAndPaymentsQuery)
export class GetPaginatedInvoicesAndPaymentsQueryHandler extends GetPaginatedQueryHandler<InvoicesAndPaymentsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, InvoicesAndPaymentsEntityService.name)
  }

}
