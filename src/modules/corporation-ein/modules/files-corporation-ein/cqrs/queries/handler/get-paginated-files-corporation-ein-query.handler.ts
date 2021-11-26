import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesCorporationEinQuery } from '../impl/get-paginated-files-corporation-ein.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';

@QueryHandler(GetPaginatedFilesCorporationEinQuery)
export class GetPaginatedFilesCorporationEinQueryHandler extends GetPaginatedQueryHandler<FilesCorporationEinEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesCorporationEinEntityService.name)
  }

}
