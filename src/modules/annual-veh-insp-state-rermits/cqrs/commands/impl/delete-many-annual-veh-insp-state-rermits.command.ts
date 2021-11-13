import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyAnnualVehInspStateRermitsCommand extends DeleteManyCommand<AnnualVehInspStateRermitsEntity>{
  constructor(public request: GetOneDto<AnnualVehInspStateRermitsEntity>) {
    super(request)
  }
}
