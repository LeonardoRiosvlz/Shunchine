import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedAccountingQuery extends GetPaginatedQuery<AccountingEntity>{
  constructor(public request: GetPaginatedDto<AccountingEntity>) {
    super(request)
  }
}
