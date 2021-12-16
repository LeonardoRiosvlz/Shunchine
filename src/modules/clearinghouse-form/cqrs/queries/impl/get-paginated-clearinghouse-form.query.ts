import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedClearinghouseFormQuery extends GetPaginatedQuery<ClearinghouseFormEntity>{
  constructor(public request: GetPaginatedDto<ClearinghouseFormEntity>) {
    super(request)
  }
}
