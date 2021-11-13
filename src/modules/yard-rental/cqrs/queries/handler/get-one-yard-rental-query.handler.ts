import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneYardRentalQuery } from '../impl/get-one-yard-rental.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';

@QueryHandler(GetOneYardRentalQuery)
export class GetOneYardRentalQueryHandler extends GetOneQueryHandler<YardRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, YardRentalEntityService.name)
  }
}

