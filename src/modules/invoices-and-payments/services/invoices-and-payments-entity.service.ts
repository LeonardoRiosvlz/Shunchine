import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { InvoicesAndPaymentsEntity } from '../entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsRepository } from '../repositories/invoices-and-payments.repository';


@Injectable()
export class InvoicesAndPaymentsEntityService extends BaseEntityService<InvoicesAndPaymentsEntity> {
  constructor(private readonly _invoicesAndPaymentsRepo: InvoicesAndPaymentsRepository) {
    super(_invoicesAndPaymentsRepo, InvoicesAndPaymentsEntity.name);
  }




}
