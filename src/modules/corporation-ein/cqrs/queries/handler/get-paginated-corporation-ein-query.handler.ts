import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedCorporationEinQuery } from '../impl/get-paginated-corporation-ein.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';

@QueryHandler(GetPaginatedCorporationEinQuery)
export class GetPaginatedCorporationEinQueryHandler extends GetPaginatedQueryHandler<CorporationEinEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CorporationEinEntityService.name)
  }

}
