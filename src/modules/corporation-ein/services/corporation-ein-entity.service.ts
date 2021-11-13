import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { CorporationEinEntity } from '../entities/corporation-ein.entity';
import { CorporationEinRepository } from '../repositories/corporation-ein.repository';


@Injectable()
export class CorporationEinEntityService extends BaseEntityService<CorporationEinEntity> {
  constructor(private readonly _corporationEinRepo: CorporationEinRepository) {
    super(_corporationEinRepo, CorporationEinEntity.name);
  }




}
