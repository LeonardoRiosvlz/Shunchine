import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FinancedEquipmentEntity } from '../entities/financed-equipment.entity';
import { FinancedEquipmentRepository } from '../repositories/financed-equipment.repository';


@Injectable()
export class FinancedEquipmentEntityService extends BaseEntityService<FinancedEquipmentEntity> {
  constructor(private readonly _financedEquipmentRepo: FinancedEquipmentRepository) {
    super(_financedEquipmentRepo, FinancedEquipmentEntity.name);
  }




}
