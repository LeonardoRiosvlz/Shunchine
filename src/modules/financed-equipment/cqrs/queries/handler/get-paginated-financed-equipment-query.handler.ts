import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFinancedEquipmentQuery } from '../impl/get-paginated-financed-equipment.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';

@QueryHandler(GetPaginatedFinancedEquipmentQuery)
export class GetPaginatedFinancedEquipmentQueryHandler extends GetPaginatedQueryHandler<FinancedEquipmentEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FinancedEquipmentEntityService.name)
  }

}
