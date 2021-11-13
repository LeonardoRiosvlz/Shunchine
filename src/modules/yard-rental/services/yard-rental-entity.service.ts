import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { YardRentalEntity } from '../entities/yard-rental.entity';
import { YardRentalRepository } from '../repositories/yard-rental.repository';


@Injectable()
export class YardRentalEntityService extends BaseEntityService<YardRentalEntity> {
  constructor(private readonly _yardRentalRepo: YardRentalRepository) {
    super(_yardRentalRepo, YardRentalEntity.name);
  }




}
