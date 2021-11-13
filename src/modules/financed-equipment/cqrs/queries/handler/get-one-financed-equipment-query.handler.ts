import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFinancedEquipmentQuery } from '../impl/get-one-financed-equipment.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { FinancedEquipmentEntityService } from '../../../services/financed-equipment-entity.service';

@QueryHandler(GetOneFinancedEquipmentQuery)
export class GetOneFinancedEquipmentQueryHandler extends GetOneQueryHandler<FinancedEquipmentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FinancedEquipmentEntityService.name)
  }
}

