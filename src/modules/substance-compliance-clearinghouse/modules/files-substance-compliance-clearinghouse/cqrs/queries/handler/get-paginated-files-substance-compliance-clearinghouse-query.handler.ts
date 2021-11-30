import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesSubstanceComplianceClearinghouseQuery } from '../impl/get-paginated-files-substance-compliance-clearinghouse.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';

@QueryHandler(GetPaginatedFilesSubstanceComplianceClearinghouseQuery)
export class GetPaginatedFilesSubstanceComplianceClearinghouseQueryHandler extends GetPaginatedQueryHandler<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name)
  }

}
