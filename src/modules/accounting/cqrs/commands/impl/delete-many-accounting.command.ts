import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyAccountingCommand extends DeleteManyCommand<AccountingEntity>{
  constructor(public request: GetOneDto<AccountingEntity>) {
    super(request)
  }
}
