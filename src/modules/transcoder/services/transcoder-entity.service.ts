import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { TranscoderEntity } from '../entities/transcoder.entity';
import { TranscoderRepository } from '../repositories/transcoder.repository';


@Injectable()
export class TranscoderEntityService extends BaseEntityService<TranscoderEntity> {
  constructor(private readonly _transcoderRepo: TranscoderRepository) {
    super(_transcoderRepo, TranscoderEntity.name);

  }




}
