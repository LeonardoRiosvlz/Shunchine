import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';

export class UpdateFilesSubstanceComplianceClearinghouseCommand extends UpdateCommand<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(public entityId: string, update: Partial<FilesSubstanceComplianceClearinghouseEntity>) {
    super({entityId, update});
  }
}
