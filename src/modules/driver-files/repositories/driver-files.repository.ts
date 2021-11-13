import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DriverFilesEntity } from '../entities/driver-files.entity';

@Injectable()
export class DriverFilesRepository extends BaseRepository<DriverFilesEntity, FilterableFieldsType<DriverFilesEntity>> {
  constructor(
    @Inject(DriverFilesEntity.name) private readonly _driverFilesModel: Model<DriverFilesEntity>,
  ) {
    super(_driverFilesModel, DriverFilesRepository.name);
  }
}
