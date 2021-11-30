import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesSubstanceComplianceClearinghouseQuery extends GetAllQuery<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetAllDto<FilesSubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
