import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { IftaFuelTaxesEntity } from '../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesRepository } from '../repositories/ifta-fuel-taxes.repository';


@Injectable()
export class IftaFuelTaxesEntityService extends BaseEntityService<IftaFuelTaxesEntity> {
  constructor(private readonly _iftaFuelTaxesRepo: IftaFuelTaxesRepository) {
    super(_iftaFuelTaxesRepo, IftaFuelTaxesEntity.name);
  }




}
