import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneRoadTaxesFormQuery } from '../impl/get-one-road-taxes-form.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';

@QueryHandler(GetOneRoadTaxesFormQuery)
export class GetOneRoadTaxesFormQueryHandler extends GetOneQueryHandler<RoadTaxesFormEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RoadTaxesFormEntityService.name)
  }
}

