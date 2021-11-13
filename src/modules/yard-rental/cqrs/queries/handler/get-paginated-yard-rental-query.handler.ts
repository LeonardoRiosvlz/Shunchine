import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedYardRentalQuery } from '../impl/get-paginated-yard-rental.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { YardRentalEntityService } from '../../../services/yard-rental-entity.service';

@QueryHandler(GetPaginatedYardRentalQuery)
export class GetPaginatedYardRentalQueryHandler extends GetPaginatedQueryHandler<YardRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, YardRentalEntityService.name)
  }

}
