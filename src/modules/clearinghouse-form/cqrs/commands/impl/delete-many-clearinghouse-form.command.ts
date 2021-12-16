import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyClearinghouseFormCommand extends DeleteManyCommand<ClearinghouseFormEntity>{
  constructor(public request: GetOneDto<ClearinghouseFormEntity>) {
    super(request)
  }
}
