import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedYardRentalQuery extends GetPaginatedQuery<YardRentalEntity>{
  constructor(public request: GetPaginatedDto<YardRentalEntity>) {
    super(request)
  }
}
