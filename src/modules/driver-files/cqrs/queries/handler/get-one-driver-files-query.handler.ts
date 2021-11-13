import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDriverFilesQuery } from '../impl/get-one-driver-files.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';

@QueryHandler(GetOneDriverFilesQuery)
export class GetOneDriverFilesQueryHandler extends GetOneQueryHandler<DriverFilesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DriverFilesEntityService.name)
  }
}

