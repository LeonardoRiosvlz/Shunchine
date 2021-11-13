import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllAnnualVehInspStateRermitsQuery extends GetAllQuery<AnnualVehInspStateRermitsEntity>{
  constructor(public request: GetAllDto<AnnualVehInspStateRermitsEntity>) {
    super(request)
  }
}
