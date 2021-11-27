import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesDotInfoQuery } from '../impl/get-paginated-files-dot-info.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';

@QueryHandler(GetPaginatedFilesDotInfoQuery)
export class GetPaginatedFilesDotInfoQueryHandler extends GetPaginatedQueryHandler<FilesDotInfoEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesDotInfoEntityService.name)
  }

}
