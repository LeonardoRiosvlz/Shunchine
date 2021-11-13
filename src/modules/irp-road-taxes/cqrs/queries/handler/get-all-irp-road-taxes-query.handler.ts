import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllIrpRoadTaxesQuery } from '../impl/get-all-irp-road-taxes.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';

@QueryHandler(GetAllIrpRoadTaxesQuery)
export class GetAllIrpRoadTaxesQueryHandler extends GetAllQueryHandler<IrpRoadTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IrpRoadTaxesEntityService.name)
  }

}
