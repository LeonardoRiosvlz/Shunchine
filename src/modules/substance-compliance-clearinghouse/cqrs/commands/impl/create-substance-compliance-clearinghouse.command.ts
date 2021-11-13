import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';

export class CreateSubstanceComplianceClearinghouseCommand extends CreateCommand<SubstanceComplianceClearinghouseEntity> {
  constructor(public request: SubstanceComplianceClearinghouseEntity) {
    super(request);
  }
}
