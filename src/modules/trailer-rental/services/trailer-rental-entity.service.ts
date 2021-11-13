import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { TrailerRentalEntity } from '../entities/trailer-rental.entity';
import { TrailerRentalRepository } from '../repositories/trailer-rental.repository';


@Injectable()
export class TrailerRentalEntityService extends BaseEntityService<TrailerRentalEntity> {
  constructor(private readonly _trailerRentalRepo: TrailerRentalRepository) {
    super(_trailerRentalRepo, TrailerRentalEntity.name);
  }




}
