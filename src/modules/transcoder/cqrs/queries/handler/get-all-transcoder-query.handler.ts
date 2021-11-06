import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllTranscoderQuery } from '../impl/get-all-transcoder.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';

@QueryHandler(GetAllTranscoderQuery)
export class GetAllTranscoderQueryHandler extends GetAllQueryHandler<TranscoderEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TranscoderEntityService.name)
  }

}
