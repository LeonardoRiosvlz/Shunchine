import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesFinancedEquipmentEntity } from '../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentRepository } from '../repositories/files-financed-equipment.repository';


@Injectable()
export class FilesFinancedEquipmentEntityService extends BaseEntityService<FilesFinancedEquipmentEntity> {
  constructor(private readonly _filesFinancedEquipmentRepo: FilesFinancedEquipmentRepository) {
    super(_filesFinancedEquipmentRepo, FilesFinancedEquipmentEntity.name);
  }




}
