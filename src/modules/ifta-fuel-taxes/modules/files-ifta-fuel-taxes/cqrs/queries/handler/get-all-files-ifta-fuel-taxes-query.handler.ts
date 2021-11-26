import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesIftaFuelTaxesQuery } from '../impl/get-all-files-ifta-fuel-taxes.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';

@QueryHandler(GetAllFilesIftaFuelTaxesQuery)
export class GetAllFilesIftaFuelTaxesQueryHandler extends GetAllQueryHandler<FilesIftaFuelTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesIftaFuelTaxesEntityService.name)
  }

}
