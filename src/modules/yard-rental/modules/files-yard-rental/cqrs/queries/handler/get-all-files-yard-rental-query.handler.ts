import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesYardRentalQuery } from '../impl/get-all-files-yard-rental.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';

@QueryHandler(GetAllFilesYardRentalQuery)
export class GetAllFilesYardRentalQueryHandler extends GetAllQueryHandler<FilesYardRentalEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesYardRentalEntityService.name)
  }

}
