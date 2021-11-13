import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { AnnualVehInspStateRermitsEntity } from '../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsRepository } from '../repositories/annual-veh-insp-state-rermits.repository';


@Injectable()
export class AnnualVehInspStateRermitsEntityService extends BaseEntityService<AnnualVehInspStateRermitsEntity> {
  constructor(private readonly _annualVehInspStateRermitsRepo: AnnualVehInspStateRermitsRepository) {
    super(_annualVehInspStateRermitsRepo, AnnualVehInspStateRermitsEntity.name);
  }




}
