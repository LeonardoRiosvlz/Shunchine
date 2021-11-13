import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDotInfoQuery } from '../impl/get-one-dot-info.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';

@QueryHandler(GetOneDotInfoQuery)
export class GetOneDotInfoQueryHandler extends GetOneQueryHandler<DotInfoEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DotInfoEntityService.name)
  }
}

