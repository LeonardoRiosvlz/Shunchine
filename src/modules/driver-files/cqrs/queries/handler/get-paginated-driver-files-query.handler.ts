import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDriverFilesQuery } from '../impl/get-paginated-driver-files.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';

@QueryHandler(GetPaginatedDriverFilesQuery)
export class GetPaginatedDriverFilesQueryHandler extends GetPaginatedQueryHandler<DriverFilesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DriverFilesEntityService.name)
  }

}
