import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllClientQuery } from '../impl/get-all-client.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ClientEntity } from '../../../entities/client.entity';
import { ClientEntityService } from '../../../services/client-entity.service';

@QueryHandler(GetAllClientQuery)
export class GetAllClientQueryHandler extends GetAllQueryHandler<ClientEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClientEntityService.name)
  }

}
