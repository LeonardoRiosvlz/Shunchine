import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { RoadTaxesFormEntity } from '../entities/road-taxes-form.entity';

@Injectable()
export class RoadTaxesFormRepository extends BaseRepository<RoadTaxesFormEntity, FilterableFieldsType<RoadTaxesFormEntity>> {
  constructor(
    @Inject(RoadTaxesFormEntity.name) private readonly _roadTaxesFormModel: Model<RoadTaxesFormEntity>,
  ) {
    super(_roadTaxesFormModel, RoadTaxesFormRepository.name);
  }
}
