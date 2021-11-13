import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ClientEntity } from '../../../entities/client.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedClientQuery extends GetPaginatedQuery<ClientEntity>{
  constructor(public request: GetPaginatedDto<ClientEntity>) {
    super(request)
  }
}
