import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesTrailerRentalQuery } from '../impl/get-all-files-trailer-rental.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';

@QueryHandler(GetAllFilesTrailerRentalQuery)
export class GetAllFilesTrailerRentalQueryHandler extends GetAllQueryHandler<FilesTrailerRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesTrailerRentalEntityService.name)
  }

}
