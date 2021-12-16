import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesFinancedEquipmentQuery } from '../impl/get-one-files-financed-equipment.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';

@QueryHandler(GetOneFilesFinancedEquipmentQuery)
export class GetOneFilesFinancedEquipmentQueryHandler extends GetOneQueryHandler<FilesFinancedEquipmentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesFinancedEquipmentEntityService.name)
  }
}

