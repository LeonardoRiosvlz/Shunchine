import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';

export class CreateFilesSubstanceComplianceClearinghouseCommand extends CreateCommand<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(public request: FilesSubstanceComplianceClearinghouseEntity) {
    super(request);
  }
}
