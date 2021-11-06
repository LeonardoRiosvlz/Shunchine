import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneTranscoderQuery } from '../impl/get-one-transcoder.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';

@QueryHandler(GetOneTranscoderQuery)
export class GetOneTranscoderQueryHandler extends GetOneQueryHandler<TranscoderEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TranscoderEntityService.name)
  }
}

