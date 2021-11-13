import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedAnnualVehInspStateRermitsQuery extends GetPaginatedQuery<AnnualVehInspStateRermitsEntity>{
  constructor(public request: GetPaginatedDto<AnnualVehInspStateRermitsEntity>) {
    super(request)
  }
}
