import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFinancedEquipmentQuery } from '../impl/get-all-financed-equipment.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';

@QueryHandler(GetAllFinancedEquipmentQuery)
export class GetAllFinancedEquipmentQueryHandler extends GetAllQueryHandler<FinancedEquipmentEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FinancedEquipmentEntityService.name)
  }

}
