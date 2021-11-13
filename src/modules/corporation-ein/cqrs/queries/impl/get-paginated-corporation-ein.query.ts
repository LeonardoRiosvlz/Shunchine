import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedCorporationEinQuery extends GetPaginatedQuery<CorporationEinEntity>{
  constructor(public request: GetPaginatedDto<CorporationEinEntity>) {
    super(request)
  }
}
