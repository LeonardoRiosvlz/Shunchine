import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesIrpRoadTaxesEntity } from '../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesRepository } from '../repositories/files-irp-road-taxes.repository';


@Injectable()
export class FilesIrpRoadTaxesEntityService extends BaseEntityService<FilesIrpRoadTaxesEntity> {
  constructor(private readonly _filesIrpRoadTaxesRepo: FilesIrpRoadTaxesRepository) {
    super(_filesIrpRoadTaxesRepo, FilesIrpRoadTaxesEntity.name);
  }




}
