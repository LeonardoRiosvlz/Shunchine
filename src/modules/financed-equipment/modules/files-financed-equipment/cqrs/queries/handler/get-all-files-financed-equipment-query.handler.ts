import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesFinancedEquipmentQuery } from '../impl/get-all-files-financed-equipment.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';

@QueryHandler(GetAllFilesFinancedEquipmentQuery)
export class GetAllFilesFinancedEquipmentQueryHandler extends GetAllQueryHandler<FilesFinancedEquipmentEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesFinancedEquipmentEntityService.name)
  }

}
