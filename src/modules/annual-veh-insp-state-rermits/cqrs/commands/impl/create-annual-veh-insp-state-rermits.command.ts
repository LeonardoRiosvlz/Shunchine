import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';

export class CreateAnnualVehInspStateRermitsCommand extends CreateCommand<AnnualVehInspStateRermitsEntity> {
  constructor(public request: AnnualVehInspStateRermitsEntity) {
    super(request);
  }
}
