import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { AnnualVehInspStateRermitsEntity } from '../entities/annual-veh-insp-state-rermits.entity';

@Injectable()
export class AnnualVehInspStateRermitsRepository extends BaseRepository<AnnualVehInspStateRermitsEntity, FilterableFieldsType<AnnualVehInspStateRermitsEntity>> {
  constructor(
    @Inject(AnnualVehInspStateRermitsEntity.name) private readonly _annualVehInspStateRermitsModel: Model<AnnualVehInspStateRermitsEntity>,
  ) {
    super(_annualVehInspStateRermitsModel, AnnualVehInspStateRermitsRepository.name);
  }
}
