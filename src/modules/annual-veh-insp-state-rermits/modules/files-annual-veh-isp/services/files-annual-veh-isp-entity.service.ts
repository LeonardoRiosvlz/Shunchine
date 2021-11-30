import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesAnnualVehIspEntity } from '../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspRepository } from '../repositories/files-annual-veh-isp.repository';


@Injectable()
export class FilesAnnualVehIspEntityService extends BaseEntityService<FilesAnnualVehIspEntity> {
  constructor(private readonly _filesAnnualVehIspRepo: FilesAnnualVehIspRepository) {
    super(_filesAnnualVehIspRepo, FilesAnnualVehIspEntity.name);
  }




}
