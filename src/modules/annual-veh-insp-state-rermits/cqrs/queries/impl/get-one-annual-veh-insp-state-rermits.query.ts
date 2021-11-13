import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneAnnualVehInspStateRermitsQuery extends GetOneQuery<AnnualVehInspStateRermitsEntity>{
  constructor(public request: GetOneDto<AnnualVehInspStateRermitsEntity>) {
    super(request)
  }
}
