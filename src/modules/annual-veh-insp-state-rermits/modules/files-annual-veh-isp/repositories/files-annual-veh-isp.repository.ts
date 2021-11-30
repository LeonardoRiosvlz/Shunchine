import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesAnnualVehIspEntity } from '../entities/files-annual-veh-isp.entity';

@Injectable()
export class FilesAnnualVehIspRepository extends BaseRepository<FilesAnnualVehIspEntity, FilterableFieldsType<FilesAnnualVehIspEntity>> {
  constructor(
    @Inject(FilesAnnualVehIspEntity.name) private readonly _filesAnnualVehIspModel: Model<FilesAnnualVehIspEntity>,
  ) {
    super(_filesAnnualVehIspModel, FilesAnnualVehIspRepository.name);
  }
}
