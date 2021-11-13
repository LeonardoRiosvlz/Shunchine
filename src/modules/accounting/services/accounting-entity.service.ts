import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { AccountingEntity } from '../entities/accounting.entity';
import { AccountingRepository } from '../repositories/accounting.repository';


@Injectable()
export class AccountingEntityService extends BaseEntityService<AccountingEntity> {
  constructor(private readonly _accountingRepo: AccountingRepository) {
    super(_accountingRepo, AccountingEntity.name);
  }




}
