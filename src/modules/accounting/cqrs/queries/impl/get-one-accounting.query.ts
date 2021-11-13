import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneAccountingQuery extends GetOneQuery<AccountingEntity>{
  constructor(public request: GetOneDto<AccountingEntity>) {
    super(request)
  }
}
