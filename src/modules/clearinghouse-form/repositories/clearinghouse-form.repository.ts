import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClearinghouseFormEntity } from '../entities/clearinghouse-form.entity';

@Injectable()
export class ClearinghouseFormRepository extends BaseRepository<ClearinghouseFormEntity, FilterableFieldsType<ClearinghouseFormEntity>> {
  constructor(
    @Inject(ClearinghouseFormEntity.name) private readonly _clearinghouseFormModel: Model<ClearinghouseFormEntity>,
  ) {
    super(_clearinghouseFormModel, ClearinghouseFormRepository.name);
  }
}
