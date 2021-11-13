import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { IrpRoadTaxesEntity } from '../entities/irp-road-taxes.entity';
import { IrpRoadTaxesRepository } from '../repositories/irp-road-taxes.repository';


@Injectable()
export class IrpRoadTaxesEntityService extends BaseEntityService<IrpRoadTaxesEntity> {
  constructor(private readonly _irpRoadTaxesRepo: IrpRoadTaxesRepository) {
    super(_irpRoadTaxesRepo, IrpRoadTaxesEntity.name);
  }




}
