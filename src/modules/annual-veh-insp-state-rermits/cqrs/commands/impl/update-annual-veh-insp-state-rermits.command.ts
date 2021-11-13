import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';

export class UpdateAnnualVehInspStateRermitsCommand extends UpdateCommand<AnnualVehInspStateRermitsEntity> {
  constructor(public entityId: string, update: Partial<AnnualVehInspStateRermitsEntity>) {
    super({entityId, update});
  }
}
