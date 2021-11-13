import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneCorporationEinQuery extends GetOneQuery<CorporationEinEntity>{
  constructor(public request: GetOneDto<CorporationEinEntity>) {
    super(request)
  }
}
