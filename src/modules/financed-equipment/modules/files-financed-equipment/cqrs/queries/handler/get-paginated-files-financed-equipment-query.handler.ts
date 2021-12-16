import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesFinancedEquipmentQuery } from '../impl/get-paginated-files-financed-equipment.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentEntityService } from '../../../services/files-financed-equipment-entity.service';

@QueryHandler(GetPaginatedFilesFinancedEquipmentQuery)
export class GetPaginatedFilesFinancedEquipmentQueryHandler extends GetPaginatedQueryHandler<FilesFinancedEquipmentEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesFinancedEquipmentEntityService.name)
  }

}
