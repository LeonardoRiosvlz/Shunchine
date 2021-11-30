import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesSubstanceComplianceClearinghouseCommand extends DeleteManyCommand<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetOneDto<FilesSubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
