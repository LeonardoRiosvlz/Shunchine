import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesIrpRoadTaxesQuery } from '../impl/get-paginated-files-irp-road-taxes.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';

@QueryHandler(GetPaginatedFilesIrpRoadTaxesQuery)
export class GetPaginatedFilesIrpRoadTaxesQueryHandler extends GetPaginatedQueryHandler<FilesIrpRoadTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesIrpRoadTaxesEntityService.name)
  }

}
