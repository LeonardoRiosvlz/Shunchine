import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesYardRentalQuery } from '../impl/get-paginated-files-yard-rental.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';

@QueryHandler(GetPaginatedFilesYardRentalQuery)
export class GetPaginatedFilesYardRentalQueryHandler extends GetPaginatedQueryHandler<FilesYardRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesYardRentalEntityService.name)
  }

}
