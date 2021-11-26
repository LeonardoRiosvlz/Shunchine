import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesCorporationEinQuery } from '../impl/get-all-files-corporation-ein.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';

@QueryHandler(GetAllFilesCorporationEinQuery)
export class GetAllFilesCorporationEinQueryHandler extends GetAllQueryHandler<FilesCorporationEinEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesCorporationEinEntityService.name)
  }

}
