import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FinancedEquipmentEntity } from '../entities/financed-equipment.entity';

@Injectable()
export class FinancedEquipmentRepository extends BaseRepository<FinancedEquipmentEntity, FilterableFieldsType<FinancedEquipmentEntity>> {
  constructor(
    @Inject(FinancedEquipmentEntity.name) private readonly _financedEquipmentModel: Model<FinancedEquipmentEntity>,
  ) {
    super(_financedEquipmentModel, FinancedEquipmentRepository.name);
  }
}
