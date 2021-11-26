import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesIftaFuelTaxesQuery } from '../impl/get-one-files-ifta-fuel-taxes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';

@QueryHandler(GetOneFilesIftaFuelTaxesQuery)
export class GetOneFilesIftaFuelTaxesQueryHandler extends GetOneQueryHandler<FilesIftaFuelTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesIftaFuelTaxesEntityService.name)
  }
}

