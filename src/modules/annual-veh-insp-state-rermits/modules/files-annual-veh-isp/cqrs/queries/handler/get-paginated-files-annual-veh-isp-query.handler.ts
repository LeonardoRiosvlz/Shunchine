import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesAnnualVehIspQuery } from '../impl/get-paginated-files-annual-veh-isp.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';

@QueryHandler(GetPaginatedFilesAnnualVehIspQuery)
export class GetPaginatedFilesAnnualVehIspQueryHandler extends GetPaginatedQueryHandler<FilesAnnualVehIspEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesAnnualVehIspEntityService.name)
  }

}
