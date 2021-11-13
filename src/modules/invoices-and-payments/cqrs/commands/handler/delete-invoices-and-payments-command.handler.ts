import { CommandHandler } from '@nestjs/cqrs';
import { DeleteInvoicesAndPaymentsCommand } from '../impl/delete-invoices-and-payments.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';

@CommandHandler(DeleteInvoicesAndPaymentsCommand)
export class DeleteInvoicesAndPaymentsCommandHandler extends DeleteCommandHandler<InvoicesAndPaymentsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, InvoicesAndPaymentsEntityService.name)
  }
}
