import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneClientQuery } from '../impl/get-one-client.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ClientEntity } from '../../../entities/client.entity';
import { ClientEntityService } from '../../../services/client-entity.service';

@QueryHandler(GetOneClientQuery)
export class GetOneClientQueryHandler extends GetOneQueryHandler<ClientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClientEntityService.name)
  }
}

