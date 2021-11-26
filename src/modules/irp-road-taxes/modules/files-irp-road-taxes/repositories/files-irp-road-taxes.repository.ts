import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesIrpRoadTaxesEntity } from '../entities/files-irp-road-taxes.entity';

@Injectable()
export class FilesIrpRoadTaxesRepository extends BaseRepository<FilesIrpRoadTaxesEntity, FilterableFieldsType<FilesIrpRoadTaxesEntity>> {
  constructor(
    @Inject(FilesIrpRoadTaxesEntity.name) private readonly _filesIrpRoadTaxesModel: Model<FilesIrpRoadTaxesEntity>,
  ) {
    super(_filesIrpRoadTaxesModel, FilesIrpRoadTaxesRepository.name);
  }
}
