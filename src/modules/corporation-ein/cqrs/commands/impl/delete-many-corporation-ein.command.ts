import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyCorporationEinCommand extends DeleteManyCommand<CorporationEinEntity>{
  constructor(public request: GetOneDto<CorporationEinEntity>) {
    super(request)
  }
}
