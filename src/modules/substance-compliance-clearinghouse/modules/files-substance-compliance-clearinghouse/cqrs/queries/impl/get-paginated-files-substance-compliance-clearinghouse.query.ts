import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesSubstanceComplianceClearinghouseQuery extends GetPaginatedQuery<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetPaginatedDto<FilesSubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
