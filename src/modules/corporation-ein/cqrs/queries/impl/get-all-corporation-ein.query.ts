import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllCorporationEinQuery extends GetAllQuery<CorporationEinEntity>{
  constructor(public request: GetAllDto<CorporationEinEntity>) {
    super(request)
  }
}
