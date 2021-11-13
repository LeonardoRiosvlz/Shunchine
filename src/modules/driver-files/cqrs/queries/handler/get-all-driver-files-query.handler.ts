import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDriverFilesQuery } from '../impl/get-all-driver-files.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';

@QueryHandler(GetAllDriverFilesQuery)
export class GetAllDriverFilesQueryHandler extends GetAllQueryHandler<DriverFilesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DriverFilesEntityService.name)
  }

}
