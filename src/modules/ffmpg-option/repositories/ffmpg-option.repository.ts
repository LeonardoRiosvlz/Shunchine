import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FfmpgOptionEntity } from '../entities/ffmpg-option.entity';

@Injectable()
export class FfmpgOptionRepository extends BaseRepository<FfmpgOptionEntity, FilterableFieldsType<FfmpgOptionEntity>> {
  constructor(
    @Inject(FfmpgOptionEntity.name) private readonly _ffmpgOptionModel: Model<FfmpgOptionEntity>,
  ) {
    super(_ffmpgOptionModel, FfmpgOptionRepository.name);
  }
}
