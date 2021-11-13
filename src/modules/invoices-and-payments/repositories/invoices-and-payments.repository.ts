import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { InvoicesAndPaymentsEntity } from '../entities/invoices-and-payments.entity';

@Injectable()
export class InvoicesAndPaymentsRepository extends BaseRepository<InvoicesAndPaymentsEntity, FilterableFieldsType<InvoicesAndPaymentsEntity>> {
  constructor(
    @Inject(InvoicesAndPaymentsEntity.name) private readonly _invoicesAndPaymentsModel: Model<InvoicesAndPaymentsEntity>,
  ) {
    super(_invoicesAndPaymentsModel, InvoicesAndPaymentsRepository.name);
  }
}
