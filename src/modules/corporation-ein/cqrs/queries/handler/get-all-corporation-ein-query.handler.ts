import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllCorporationEinQuery } from '../impl/get-all-corporation-ein.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';

@QueryHandler(GetAllCorporationEinQuery)
export class GetAllCorporationEinQueryHandler extends GetAllQueryHandler<CorporationEinEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CorporationEinEntityService.name)
  }

}
