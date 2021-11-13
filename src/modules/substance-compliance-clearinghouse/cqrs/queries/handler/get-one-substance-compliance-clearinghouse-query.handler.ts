import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneSubstanceComplianceClearinghouseQuery } from '../impl/get-one-substance-compliance-clearinghouse.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';

@QueryHandler(GetOneSubstanceComplianceClearinghouseQuery)
export class GetOneSubstanceComplianceClearinghouseQueryHandler extends GetOneQueryHandler<SubstanceComplianceClearinghouseEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name)
  }
}

