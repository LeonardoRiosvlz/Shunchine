import { CreateFilesSubstanceComplianceClearinghouseCommandHandler } from './handler/create-files-substance-compliance-clearinghouse-command.handler';
import { DeleteFilesSubstanceComplianceClearinghouseCommandHandler } from './handler/delete-files-substance-compliance-clearinghouse-command.handler';
import { UpdateFilesSubstanceComplianceClearinghouseCommandHandler } from './handler/update-files-substance-compliance-clearinghouse-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesSubstanceComplianceClearinghouseCommandHandler } from './handler/delete-many-files-substance-compliance-clearinghouse-command.handler';

export const FilesSubstanceComplianceClearinghouseCommandHandlers: Array<Provider> = [
  CreateFilesSubstanceComplianceClearinghouseCommandHandler,
  DeleteFilesSubstanceComplianceClearinghouseCommandHandler,
  UpdateFilesSubstanceComplianceClearinghouseCommandHandler,
  DeleteManyFilesSubstanceComplianceClearinghouseCommandHandler
];
