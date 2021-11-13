import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyInvoicesAndPaymentsCommand } from '../impl/delete-many-invoices-and-payments.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { InvoicesAndPaymentsEntity } from '../../../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsEntityService } from '../../../services/invoices-and-payments-entity.service';

@CommandHandler(DeleteManyInvoicesAndPaymentsCommand)
export class DeleteManyInvoicesAndPaymentsCommandHandler extends DeleteManyCommandHandler<InvoicesAndPaymentsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, InvoicesAndPaymentsEntityService.name)
  }

}
