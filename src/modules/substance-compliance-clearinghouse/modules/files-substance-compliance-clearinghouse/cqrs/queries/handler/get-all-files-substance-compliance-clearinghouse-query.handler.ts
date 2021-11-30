import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesSubstanceComplianceClearinghouseQuery } from '../impl/get-all-files-substance-compliance-clearinghouse.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';

@QueryHandler(GetAllFilesSubstanceComplianceClearinghouseQuery)
export class GetAllFilesSubstanceComplianceClearinghouseQueryHandler extends GetAllQueryHandler<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name)
  }

}
