import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ClientEntity } from '../../../entities/client.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllClientQuery extends GetAllQuery<ClientEntity>{
  constructor(public request: GetAllDto<ClientEntity>) {
    super(request)
  }
}
