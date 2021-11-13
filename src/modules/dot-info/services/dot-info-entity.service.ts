import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { DotInfoEntity } from '../entities/dot-info.entity';
import { DotInfoRepository } from '../repositories/dot-info.repository';


@Injectable()
export class DotInfoEntityService extends BaseEntityService<DotInfoEntity> {
  constructor(private readonly _dotInfoRepo: DotInfoRepository) {
    super(_dotInfoRepo, DotInfoEntity.name);
  }




}
