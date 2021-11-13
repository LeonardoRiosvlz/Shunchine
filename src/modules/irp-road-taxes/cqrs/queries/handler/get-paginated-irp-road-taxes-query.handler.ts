import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedIrpRoadTaxesQuery } from '../impl/get-paginated-irp-road-taxes.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';

@QueryHandler(GetPaginatedIrpRoadTaxesQuery)
export class GetPaginatedIrpRoadTaxesQueryHandler extends GetPaginatedQueryHandler<IrpRoadTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IrpRoadTaxesEntityService.name)
  }

}
