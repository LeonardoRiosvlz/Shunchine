import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllSubstanceComplianceClearinghouseQuery } from '../impl/get-all-substance-compliance-clearinghouse.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';

@QueryHandler(GetAllSubstanceComplianceClearinghouseQuery)
export class GetAllSubstanceComplianceClearinghouseQueryHandler extends GetAllQueryHandler<SubstanceComplianceClearinghouseEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name)
  }

}
