import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesSubstanceComplianceClearinghouseQuery extends GetOneQuery<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetOneDto<FilesSubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
