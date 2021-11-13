import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneCorporationEinQuery } from '../impl/get-one-corporation-ein.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';

@QueryHandler(GetOneCorporationEinQuery)
export class GetOneCorporationEinQueryHandler extends GetOneQueryHandler<CorporationEinEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CorporationEinEntityService.name)
  }
}

