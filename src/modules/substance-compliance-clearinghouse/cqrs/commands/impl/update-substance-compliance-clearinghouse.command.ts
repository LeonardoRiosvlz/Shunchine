import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';

export class UpdateSubstanceComplianceClearinghouseCommand extends UpdateCommand<SubstanceComplianceClearinghouseEntity> {
  constructor(public entityId: string, update: Partial<SubstanceComplianceClearinghouseEntity>) {
    super({entityId, update});
  }
}
