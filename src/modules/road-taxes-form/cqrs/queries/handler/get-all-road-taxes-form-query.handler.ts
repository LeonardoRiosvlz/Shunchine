import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllRoadTaxesFormQuery } from '../impl/get-all-road-taxes-form.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';

@QueryHandler(GetAllRoadTaxesFormQuery)
export class GetAllRoadTaxesFormQueryHandler extends GetAllQueryHandler<RoadTaxesFormEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RoadTaxesFormEntityService.name)
  }

}
