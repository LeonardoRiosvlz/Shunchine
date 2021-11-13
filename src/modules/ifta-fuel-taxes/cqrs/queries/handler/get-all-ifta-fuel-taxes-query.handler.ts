import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllIftaFuelTaxesQuery } from '../impl/get-all-ifta-fuel-taxes.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';

@QueryHandler(GetAllIftaFuelTaxesQuery)
export class GetAllIftaFuelTaxesQueryHandler extends GetAllQueryHandler<IftaFuelTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IftaFuelTaxesEntityService.name)
  }

}
