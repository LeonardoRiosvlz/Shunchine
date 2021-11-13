import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneIftaFuelTaxesQuery } from '../impl/get-one-ifta-fuel-taxes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';

@QueryHandler(GetOneIftaFuelTaxesQuery)
export class GetOneIftaFuelTaxesQueryHandler extends GetOneQueryHandler<IftaFuelTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IftaFuelTaxesEntityService.name)
  }
}

