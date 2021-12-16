import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedClearinghouseFormQuery } from '../impl/get-paginated-clearinghouse-form.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';

@QueryHandler(GetPaginatedClearinghouseFormQuery)
export class GetPaginatedClearinghouseFormQueryHandler extends GetPaginatedQueryHandler<ClearinghouseFormEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClearinghouseFormEntityService.name)
  }

}
