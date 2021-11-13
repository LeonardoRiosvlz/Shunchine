import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IrpRoadTaxesEntity } from '../entities/irp-road-taxes.entity';

@Injectable()
export class IrpRoadTaxesRepository extends BaseRepository<IrpRoadTaxesEntity, FilterableFieldsType<IrpRoadTaxesEntity>> {
  constructor(
    @Inject(IrpRoadTaxesEntity.name) private readonly _irpRoadTaxesModel: Model<IrpRoadTaxesEntity>,
  ) {
    super(_irpRoadTaxesModel, IrpRoadTaxesRepository.name);
  }
}
