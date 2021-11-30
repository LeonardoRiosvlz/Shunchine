import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesSubstanceComplianceClearinghouseQuery } from '../impl/get-one-files-substance-compliance-clearinghouse.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';

@QueryHandler(GetOneFilesSubstanceComplianceClearinghouseQuery)
export class GetOneFilesSubstanceComplianceClearinghouseQueryHandler extends GetOneQueryHandler<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name)
  }
}

