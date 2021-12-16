import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneClearinghouseFormQuery extends GetOneQuery<ClearinghouseFormEntity>{
  constructor(public request: GetOneDto<ClearinghouseFormEntity>) {
    super(request)
  }
}
