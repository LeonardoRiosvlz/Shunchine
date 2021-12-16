import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneClearinghouseFormQuery } from '../impl/get-one-clearinghouse-form.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';

@QueryHandler(GetOneClearinghouseFormQuery)
export class GetOneClearinghouseFormQueryHandler extends GetOneQueryHandler<ClearinghouseFormEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClearinghouseFormEntityService.name)
  }
}

