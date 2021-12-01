import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesYardRentalQuery } from '../impl/get-one-files-yard-rental.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';

@QueryHandler(GetOneFilesYardRentalQuery)
export class GetOneFilesYardRentalQueryHandler extends GetOneQueryHandler<FilesYardRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesYardRentalEntityService.name)
  }
}

