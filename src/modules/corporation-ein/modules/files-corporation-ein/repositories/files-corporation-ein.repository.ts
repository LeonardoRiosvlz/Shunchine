import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesCorporationEinEntity } from '../entities/files-corporation-ein.entity';

@Injectable()
export class FilesCorporationEinRepository extends BaseRepository<FilesCorporationEinEntity, FilterableFieldsType<FilesCorporationEinEntity>> {
  constructor(
    @Inject(FilesCorporationEinEntity.name) private readonly _filesCorporationEinModel: Model<FilesCorporationEinEntity>,
  ) {
    super(_filesCorporationEinModel, FilesCorporationEinRepository.name);
  }
}
