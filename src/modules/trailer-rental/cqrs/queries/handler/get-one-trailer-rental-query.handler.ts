import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneTrailerRentalQuery } from '../impl/get-one-trailer-rental.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';

@QueryHandler(GetOneTrailerRentalQuery)
export class GetOneTrailerRentalQueryHandler extends GetOneQueryHandler<TrailerRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TrailerRentalEntityService.name)
  }
}

