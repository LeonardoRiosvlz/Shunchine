import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFfmpgOptionQuery } from '../impl/get-all-ffmpg-option.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';

@QueryHandler(GetAllFfmpgOptionQuery)
export class GetAllFfmpgOptionQueryHandler extends GetAllQueryHandler<FfmpgOptionEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FfmpgOptionEntityService.name)
  }

}
