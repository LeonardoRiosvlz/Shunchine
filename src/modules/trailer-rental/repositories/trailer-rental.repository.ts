import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { TrailerRentalEntity } from '../entities/trailer-rental.entity';

@Injectable()
export class TrailerRentalRepository extends BaseRepository<TrailerRentalEntity, FilterableFieldsType<TrailerRentalEntity>> {
  constructor(
    @Inject(TrailerRentalEntity.name) private readonly _trailerRentalModel: Model<TrailerRentalEntity>,
  ) {
    super(_trailerRentalModel, TrailerRentalRepository.name);
  }
}
