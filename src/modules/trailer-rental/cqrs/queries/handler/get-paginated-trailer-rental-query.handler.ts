import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedTrailerRentalQuery } from '../impl/get-paginated-trailer-rental.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { TrailerRentalEntityService } from '../../../services/trailer-rental-entity.service';

@QueryHandler(GetPaginatedTrailerRentalQuery)
export class GetPaginatedTrailerRentalQueryHandler extends GetPaginatedQueryHandler<TrailerRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TrailerRentalEntityService.name)
  }

}
