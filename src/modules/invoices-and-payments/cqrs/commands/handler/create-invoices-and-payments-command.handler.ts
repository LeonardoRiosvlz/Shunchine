import { CommandHandler } from '@nestjs/cqrs';

import { CreateInvoicesAndPaymentsCommand } from '../impl/create-invoices-and-payments.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';

@CommandHandler(CreateInvoicesAndPaymentsCommand)
export class CreateInvoicesAndPaymentsCommandHandler extends CreateCommandHandler<InvoicesAndPaymentsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, InvoicesAndPaymentsEntityService.name);
  }

}
