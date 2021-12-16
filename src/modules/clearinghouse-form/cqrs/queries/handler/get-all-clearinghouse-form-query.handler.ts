import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllClearinghouseFormQuery } from '../impl/get-all-clearinghouse-form.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';

@QueryHandler(GetAllClearinghouseFormQuery)
export class GetAllClearinghouseFormQueryHandler extends GetAllQueryHandler<ClearinghouseFormEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClearinghouseFormEntityService.name)
  }

}
