import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesCorporationEinQuery } from '../impl/get-one-files-corporation-ein.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';

@QueryHandler(GetOneFilesCorporationEinQuery)
export class GetOneFilesCorporationEinQueryHandler extends GetOneQueryHandler<FilesCorporationEinEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesCorporationEinEntityService.name)
  }
}

