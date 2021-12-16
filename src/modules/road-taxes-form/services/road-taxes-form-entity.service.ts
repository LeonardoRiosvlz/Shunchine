import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { RoadTaxesFormEntity } from '../entities/road-taxes-form.entity';
import { RoadTaxesFormRepository } from '../repositories/road-taxes-form.repository';


@Injectable()
export class RoadTaxesFormEntityService extends BaseEntityService<RoadTaxesFormEntity> {
  constructor(private readonly _roadTaxesFormRepo: RoadTaxesFormRepository) {
    super(_roadTaxesFormRepo, RoadTaxesFormEntity.name);
  }




}
