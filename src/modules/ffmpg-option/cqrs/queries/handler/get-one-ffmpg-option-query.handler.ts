import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFfmpgOptionQuery } from '../impl/get-one-ffmpg-option.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';

@QueryHandler(GetOneFfmpgOptionQuery)
export class GetOneFfmpgOptionQueryHandler extends GetOneQueryHandler<FfmpgOptionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FfmpgOptionEntityService.name)
  }
}

