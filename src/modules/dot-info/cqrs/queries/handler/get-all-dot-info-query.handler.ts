import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDotInfoQuery } from '../impl/get-all-dot-info.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';

@QueryHandler(GetAllDotInfoQuery)
export class GetAllDotInfoQueryHandler extends GetAllQueryHandler<DotInfoEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DotInfoEntityService.name)
  }

}
