import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedTranscoderQuery } from '../impl/get-paginated-transcoder.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { TranscoderEntityService } from '../../../services/transcoder-entity.service';

@QueryHandler(GetPaginatedTranscoderQuery)
export class GetPaginatedTranscoderQueryHandler extends GetPaginatedQueryHandler<TranscoderEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TranscoderEntityService.name)
  }

}
