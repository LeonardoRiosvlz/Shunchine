import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllAccountingQuery extends GetAllQuery<AccountingEntity>{
  constructor(public request: GetAllDto<AccountingEntity>) {
    super(request)
  }
}
