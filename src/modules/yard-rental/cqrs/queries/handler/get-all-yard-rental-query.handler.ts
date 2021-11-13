import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllYardRentalQuery } from '../impl/get-all-yard-rental.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';

@QueryHandler(GetAllYardRentalQuery)
export class GetAllYardRentalQueryHandler extends GetAllQueryHandler<YardRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, YardRentalEntityService.name)
  }

}
