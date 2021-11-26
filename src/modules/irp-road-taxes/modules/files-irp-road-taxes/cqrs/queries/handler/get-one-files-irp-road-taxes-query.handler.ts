import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesIrpRoadTaxesQuery } from '../impl/get-one-files-irp-road-taxes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';

@QueryHandler(GetOneFilesIrpRoadTaxesQuery)
export class GetOneFilesIrpRoadTaxesQueryHandler extends GetOneQueryHandler<FilesIrpRoadTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesIrpRoadTaxesEntityService.name)
  }
}

