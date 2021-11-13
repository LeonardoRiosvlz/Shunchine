import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { DriverFilesEntity } from '../entities/driver-files.entity';
import { DriverFilesRepository } from '../repositories/driver-files.repository';


@Injectable()
export class DriverFilesEntityService extends BaseEntityService<DriverFilesEntity> {
  constructor(private readonly _driverFilesRepo: DriverFilesRepository) {
    super(_driverFilesRepo, DriverFilesEntity.name);
  }




}
