import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFfmpgTemplateQuery } from '../impl/get-paginated-ffmpg-template.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';

@QueryHandler(GetPaginatedFfmpgTemplateQuery)
export class GetPaginatedFfmpgTemplateQueryHandler extends GetPaginatedQueryHandler<FfmpgTemplateEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FfmpgTemplateEntityService.name)
  }

}
