import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedIftaFuelTaxesQuery } from '../impl/get-paginated-ifta-fuel-taxes.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';

@QueryHandler(GetPaginatedIftaFuelTaxesQuery)
export class GetPaginatedIftaFuelTaxesQueryHandler extends GetPaginatedQueryHandler<IftaFuelTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IftaFuelTaxesEntityService.name)
  }

}
