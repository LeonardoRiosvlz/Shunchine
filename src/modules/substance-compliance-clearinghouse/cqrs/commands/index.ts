import { CreateSubstanceComplianceClearinghouseCommandHandler } from './handler/create-substance-compliance-clearinghouse-command.handler';
import { DeleteSubstanceComplianceClearinghouseCommandHandler } from './handler/delete-substance-compliance-clearinghouse-command.handler';
import { UpdateSubstanceComplianceClearinghouseCommandHandler } from './handler/update-substance-compliance-clearinghouse-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManySubstanceComplianceClearinghouseCommandHandler } from './handler/delete-many-substance-compliance-clearinghouse-command.handler';

export const SubstanceComplianceClearinghouseCommandHandlers: Array<Provider> = [
  CreateSubstanceComplianceClearinghouseCommandHandler,
  DeleteSubstanceComplianceClearinghouseCommandHandler,
  UpdateSubstanceComplianceClearinghouseCommandHandler,
  DeleteManySubstanceComplianceClearinghouseCommandHandler
];
