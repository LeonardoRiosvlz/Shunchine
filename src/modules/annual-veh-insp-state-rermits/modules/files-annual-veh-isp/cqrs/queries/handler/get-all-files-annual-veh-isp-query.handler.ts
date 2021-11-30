import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesAnnualVehIspQuery } from '../impl/get-all-files-annual-veh-isp.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';

@QueryHandler(GetAllFilesAnnualVehIspQuery)
export class GetAllFilesAnnualVehIspQueryHandler extends GetAllQueryHandler<FilesAnnualVehIspEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesAnnualVehIspEntityService.name)
  }

}
