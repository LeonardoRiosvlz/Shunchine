import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { AccountingEntity } from '../entities/accounting.entity';

@Injectable()
export class AccountingRepository extends BaseRepository<AccountingEntity, FilterableFieldsType<AccountingEntity>> {
  constructor(
    @Inject(AccountingEntity.name) private readonly _accountingModel: Model<AccountingEntity>,
  ) {
    super(_accountingModel, AccountingRepository.name);
  }
}
