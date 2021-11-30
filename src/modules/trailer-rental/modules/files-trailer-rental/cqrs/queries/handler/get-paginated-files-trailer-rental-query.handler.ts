import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesTrailerRentalQuery } from '../impl/get-paginated-files-trailer-rental.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';

@QueryHandler(GetPaginatedFilesTrailerRentalQuery)
export class GetPaginatedFilesTrailerRentalQueryHandler extends GetPaginatedQueryHandler<FilesTrailerRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesTrailerRentalEntityService.name)
  }

}
