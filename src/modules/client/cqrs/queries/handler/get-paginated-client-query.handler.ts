import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedClientQuery } from '../impl/get-paginated-client.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ClientEntity } from '../../../entities/client.entity';
import { ClientEntityService } from '../../../services/client-entity.service';

@QueryHandler(GetPaginatedClientQuery)
export class GetPaginatedClientQueryHandler extends GetPaginatedQueryHandler<ClientEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClientEntityService.name)
  }

}
