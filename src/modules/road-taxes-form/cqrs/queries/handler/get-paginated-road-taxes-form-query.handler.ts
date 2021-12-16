import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedRoadTaxesFormQuery } from '../impl/get-paginated-road-taxes-form.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';

@QueryHandler(GetPaginatedRoadTaxesFormQuery)
export class GetPaginatedRoadTaxesFormQueryHandler extends GetPaginatedQueryHandler<RoadTaxesFormEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RoadTaxesFormEntityService.name)
  }

}
