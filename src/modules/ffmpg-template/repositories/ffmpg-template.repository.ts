import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FfmpgTemplateEntity } from '../entities/ffmpg-template.entity';

@Injectable()
export class FfmpgTemplateRepository extends BaseRepository<FfmpgTemplateEntity, FilterableFieldsType<FfmpgTemplateEntity>> {
  constructor(@Inject(FfmpgTemplateEntity.name) private readonly _ffmpgTemplateModel: Model<FfmpgTemplateEntity>,
  ) {
    super(_ffmpgTemplateModel, FfmpgTemplateRepository.name);
  }

}
