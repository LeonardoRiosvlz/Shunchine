import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDotInfoQuery extends GetAllQuery<DotInfoEntity>{
  constructor(public request: GetAllDto<DotInfoEntity>) {
    super(request)
  }
}
