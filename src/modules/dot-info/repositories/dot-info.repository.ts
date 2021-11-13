import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DotInfoEntity } from '../entities/dot-info.entity';

@Injectable()
export class DotInfoRepository extends BaseRepository<DotInfoEntity, FilterableFieldsType<DotInfoEntity>> {
  constructor(
    @Inject(DotInfoEntity.name) private readonly _dotInfoModel: Model<DotInfoEntity>,
  ) {
    super(_dotInfoModel, DotInfoRepository.name);
  }
}
