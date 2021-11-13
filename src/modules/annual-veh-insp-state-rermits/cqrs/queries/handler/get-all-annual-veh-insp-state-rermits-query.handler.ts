import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllAnnualVehInspStateRermitsQuery } from '../impl/get-all-annual-veh-insp-state-rermits.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';

@QueryHandler(GetAllAnnualVehInspStateRermitsQuery)
export class GetAllAnnualVehInspStateRermitsQueryHandler extends GetAllQueryHandler<AnnualVehInspStateRermitsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AnnualVehInspStateRermitsEntityService.name)
  }

}
