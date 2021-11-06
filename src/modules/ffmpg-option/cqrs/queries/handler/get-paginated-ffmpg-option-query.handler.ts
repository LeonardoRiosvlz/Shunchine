import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFfmpgOptionQuery } from '../impl/get-paginated-ffmpg-option.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';

@QueryHandler(GetPaginatedFfmpgOptionQuery)
export class GetPaginatedFfmpgOptionQueryHandler extends GetPaginatedQueryHandler<FfmpgOptionEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FfmpgOptionEntityService.name)
  }

}
