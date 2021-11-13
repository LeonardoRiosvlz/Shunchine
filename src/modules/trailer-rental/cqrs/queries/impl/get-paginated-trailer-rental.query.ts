import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedTrailerRentalQuery extends GetPaginatedQuery<TrailerRentalEntity>{
  constructor(public request: GetPaginatedDto<TrailerRentalEntity>) {
    super(request)
  }
}
