import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesAnnualVehIspQuery } from '../impl/get-one-files-annual-veh-isp.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';

@QueryHandler(GetOneFilesAnnualVehIspQuery)
export class GetOneFilesAnnualVehIspQueryHandler extends GetOneQueryHandler<FilesAnnualVehIspEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesAnnualVehIspEntityService.name)
  }
}

