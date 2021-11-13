import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllTrailerRentalQuery } from '../impl/get-all-trailer-rental.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';

@QueryHandler(GetAllTrailerRentalQuery)
export class GetAllTrailerRentalQueryHandler extends GetAllQueryHandler<TrailerRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TrailerRentalEntityService.name)
  }

}
