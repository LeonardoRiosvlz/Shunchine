import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedAnnualVehInspStateRermitsQuery } from '../impl/get-paginated-annual-veh-insp-state-rermits.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';

@QueryHandler(GetPaginatedAnnualVehInspStateRermitsQuery)
export class GetPaginatedAnnualVehInspStateRermitsQueryHandler extends GetPaginatedQueryHandler<AnnualVehInspStateRermitsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AnnualVehInspStateRermitsEntityService.name)
  }

}
