import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDotInfoQuery extends GetOneQuery<DotInfoEntity>{
  constructor(public request: GetOneDto<DotInfoEntity>) {
    super(request)
  }
}
