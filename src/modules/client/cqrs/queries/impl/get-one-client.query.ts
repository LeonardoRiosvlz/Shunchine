import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ClientEntity } from '../../../entities/client.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneClientQuery extends GetOneQuery<ClientEntity>{
  constructor(public request: GetOneDto<ClientEntity>) {
    super(request)
  }
}
