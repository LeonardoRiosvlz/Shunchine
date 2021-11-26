import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesIftaFuelTaxesQuery } from '../impl/get-paginated-files-ifta-fuel-taxes.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';

@QueryHandler(GetPaginatedFilesIftaFuelTaxesQuery)
export class GetPaginatedFilesIftaFuelTaxesQueryHandler extends GetPaginatedQueryHandler<FilesIftaFuelTaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesIftaFuelTaxesEntityService.name)
  }

}
