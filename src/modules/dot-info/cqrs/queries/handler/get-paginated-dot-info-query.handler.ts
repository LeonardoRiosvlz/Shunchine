import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDotInfoQuery } from '../impl/get-paginated-dot-info.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';

@QueryHandler(GetPaginatedDotInfoQuery)
export class GetPaginatedDotInfoQueryHandler extends GetPaginatedQueryHandler<DotInfoEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DotInfoEntityService.name)
  }

}
