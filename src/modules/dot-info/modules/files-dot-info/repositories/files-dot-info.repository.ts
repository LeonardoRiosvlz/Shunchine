import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesDotInfoEntity } from '../entities/files-dot-info.entity';

@Injectable()
export class FilesDotInfoRepository extends BaseRepository<FilesDotInfoEntity, FilterableFieldsType<FilesDotInfoEntity>> {
  constructor(
    @Inject(FilesDotInfoEntity.name) private readonly _filesDotInfoModel: Model<FilesDotInfoEntity>,
  ) {
    super(_filesDotInfoModel, FilesDotInfoRepository.name);
  }
}
