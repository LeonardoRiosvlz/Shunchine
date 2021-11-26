import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesIftaFuelTaxesEntity } from '../entities/files-ifta-fuel-taxes.entity';

@Injectable()
export class FilesIftaFuelTaxesRepository extends BaseRepository<FilesIftaFuelTaxesEntity, FilterableFieldsType<FilesIftaFuelTaxesEntity>> {
  constructor(
    @Inject(FilesIftaFuelTaxesEntity.name) private readonly _filesIftaFuelTaxesModel: Model<FilesIftaFuelTaxesEntity>,
  ) {
    super(_filesIftaFuelTaxesModel, FilesIftaFuelTaxesRepository.name);
  }
}
