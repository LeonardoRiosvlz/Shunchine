import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesDotInfoQuery } from '../impl/get-one-files-dot-info.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';

@QueryHandler(GetOneFilesDotInfoQuery)
export class GetOneFilesDotInfoQueryHandler extends GetOneQueryHandler<FilesDotInfoEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesDotInfoEntityService.name)
  }
}

