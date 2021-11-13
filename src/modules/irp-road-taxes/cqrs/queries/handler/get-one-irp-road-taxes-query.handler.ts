import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneIrpRoadTaxesQuery } from '../impl/get-one-irp-road-taxes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';

@QueryHandler(GetOneIrpRoadTaxesQuery)
export class GetOneIrpRoadTaxesQueryHandler extends GetOneQueryHandler<IrpRoadTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IrpRoadTaxesEntityService.name)
  }
}

