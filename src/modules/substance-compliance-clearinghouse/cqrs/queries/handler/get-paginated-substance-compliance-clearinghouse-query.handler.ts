import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedSubstanceComplianceClearinghouseQuery } from '../impl/get-paginated-substance-compliance-clearinghouse.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';

@QueryHandler(GetPaginatedSubstanceComplianceClearinghouseQuery)
export class GetPaginatedSubstanceComplianceClearinghouseQueryHandler extends GetPaginatedQueryHandler<SubstanceComplianceClearinghouseEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name)
  }

}
