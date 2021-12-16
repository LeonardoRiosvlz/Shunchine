import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedRoadTaxesFormQuery extends GetPaginatedQuery<RoadTaxesFormEntity>{
  constructor(public request: GetPaginatedDto<RoadTaxesFormEntity>) {
    super(request)
  }
}
