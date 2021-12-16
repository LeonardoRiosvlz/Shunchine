import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllClearinghouseFormQuery extends GetAllQuery<ClearinghouseFormEntity>{
  constructor(public request: GetAllDto<ClearinghouseFormEntity>) {
    super(request)
  }
}
