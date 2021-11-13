import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { YardRentalEntity } from '../entities/yard-rental.entity';

@Injectable()
export class YardRentalRepository extends BaseRepository<YardRentalEntity, FilterableFieldsType<YardRentalEntity>> {
  constructor(
    @Inject(YardRentalEntity.name) private readonly _yardRentalModel: Model<YardRentalEntity>,
  ) {
    super(_yardRentalModel, YardRentalRepository.name);
  }
}
