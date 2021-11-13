import { CommandHandler } from '@nestjs/cqrs';
import { UpdateInvoicesAndPaymentsCommand } from '../impl/update-invoices-and-payments.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';

@CommandHandler(UpdateInvoicesAndPaymentsCommand)
export class UpdateInvoicesAndPaymentsCommandHandler extends UpdateCommandHandler<InvoicesAndPaymentsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, InvoicesAndPaymentsEntityService.name)
  }

}
