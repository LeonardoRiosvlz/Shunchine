import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesFinancedEquipmentEntity } from '../entities/files-financed-equipment.entity';

@Injectable()
export class FilesFinancedEquipmentRepository extends BaseRepository<FilesFinancedEquipmentEntity, FilterableFieldsType<FilesFinancedEquipmentEntity>> {
  constructor(
    @Inject(FilesFinancedEquipmentEntity.name) private readonly _filesFinancedEquipmentModel: Model<FilesFinancedEquipmentEntity>,
  ) {
    super(_filesFinancedEquipmentModel, FilesFinancedEquipmentRepository.name);
  }
}
