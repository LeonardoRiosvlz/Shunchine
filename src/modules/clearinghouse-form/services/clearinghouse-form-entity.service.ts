import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ClearinghouseFormEntity } from '../entities/clearinghouse-form.entity';
import { ClearinghouseFormRepository } from '../repositories/clearinghouse-form.repository';


@Injectable()
export class ClearinghouseFormEntityService extends BaseEntityService<ClearinghouseFormEntity> {
  constructor(private readonly _clearinghouseFormRepo: ClearinghouseFormRepository) {
    super(_clearinghouseFormRepo, ClearinghouseFormEntity.name);
  }




}
