import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IftaFuelTaxesEntity } from '../entities/ifta-fuel-taxes.entity';

@Injectable()
export class IftaFuelTaxesRepository extends BaseRepository<IftaFuelTaxesEntity, FilterableFieldsType<IftaFuelTaxesEntity>> {
  constructor(
    @Inject(IftaFuelTaxesEntity.name) private readonly _iftaFuelTaxesModel: Model<IftaFuelTaxesEntity>,
  ) {
    super(_iftaFuelTaxesModel, IftaFuelTaxesRepository.name);
  }
}
