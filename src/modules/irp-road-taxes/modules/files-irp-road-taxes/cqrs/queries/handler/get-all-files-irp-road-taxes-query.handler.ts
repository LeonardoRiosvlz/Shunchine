import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesIrpRoadTaxesQuery } from '../impl/get-all-files-irp-road-taxes.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';

@QueryHandler(GetAllFilesIrpRoadTaxesQuery)
export class GetAllFilesIrpRoadTaxesQueryHandler extends GetAllQueryHandler<FilesIrpRoadTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesIrpRoadTaxesEntityService.name)
  }

}
