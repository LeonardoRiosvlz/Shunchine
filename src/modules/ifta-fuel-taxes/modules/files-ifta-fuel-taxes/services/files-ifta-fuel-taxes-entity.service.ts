import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesIftaFuelTaxesEntity } from '../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesRepository } from '../repositories/files-ifta-fuel-taxes.repository';


@Injectable()
export class FilesIftaFuelTaxesEntityService extends BaseEntityService<FilesIftaFuelTaxesEntity> {
  constructor(private readonly _filesIftaFuelTaxesRepo: FilesIftaFuelTaxesRepository) {
    super(_filesIftaFuelTaxesRepo, FilesIftaFuelTaxesEntity.name);
  }




}
