import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFfmpgTemplateQuery } from '../impl/get-all-ffmpg-template.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';

@QueryHandler(GetAllFfmpgTemplateQuery)
export class GetAllFfmpgTemplateQueryHandler extends GetAllQueryHandler<FfmpgTemplateEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FfmpgTemplateEntityService.name)
  }

}
