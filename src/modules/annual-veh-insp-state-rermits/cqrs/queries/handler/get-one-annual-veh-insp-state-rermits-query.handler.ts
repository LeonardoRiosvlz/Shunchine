import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneAnnualVehInspStateRermitsQuery } from '../impl/get-one-annual-veh-insp-state-rermits.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';

@QueryHandler(GetOneAnnualVehInspStateRermitsQuery)
export class GetOneAnnualVehInspStateRermitsQueryHandler extends GetOneQueryHandler<AnnualVehInspStateRermitsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AnnualVehInspStateRermitsEntityService.name)
  }
}

