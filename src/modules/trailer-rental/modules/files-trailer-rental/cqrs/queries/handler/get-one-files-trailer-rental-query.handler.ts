import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesTrailerRentalQuery } from '../impl/get-one-files-trailer-rental.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { FilesTrailerRentalEntityService } from '../../../services/files-trailer-rental-entity.service';

@QueryHandler(GetOneFilesTrailerRentalQuery)
export class GetOneFilesTrailerRentalQueryHandler extends GetOneQueryHandler<FilesTrailerRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesTrailerRentalEntityService.name)
  }
}

