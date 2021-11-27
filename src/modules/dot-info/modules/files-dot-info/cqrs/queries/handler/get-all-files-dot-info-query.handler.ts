import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesDotInfoQuery } from '../impl/get-all-files-dot-info.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';

@QueryHandler(GetAllFilesDotInfoQuery)
export class GetAllFilesDotInfoQueryHandler extends GetAllQueryHandler<FilesDotInfoEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesDotInfoEntityService.name)
  }

}
