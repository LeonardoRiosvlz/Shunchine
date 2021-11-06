import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFfmpgTemplateQuery } from '../impl/get-one-ffmpg-template.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';

@QueryHandler(GetOneFfmpgTemplateQuery)
export class GetOneFfmpgTemplateQueryHandler extends GetOneQueryHandler<FfmpgTemplateEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FfmpgTemplateEntityService.name)
  }
}

