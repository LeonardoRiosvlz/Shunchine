import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { CorporationEinEntity } from '../entities/corporation-ein.entity';

@Injectable()
export class CorporationEinRepository extends BaseRepository<CorporationEinEntity, FilterableFieldsType<CorporationEinEntity>> {
  constructor(
    @Inject(CorporationEinEntity.name) private readonly _corporationEinModel: Model<CorporationEinEntity>,
  ) {
    super(_corporationEinModel, CorporationEinRepository.name);
  }
}
