import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';

export class UpdateClearinghouseFormCommand extends UpdateCommand<ClearinghouseFormEntity> {
  constructor(public entityId: string, update: Partial<ClearinghouseFormEntity>) {
    super({entityId, update});
  }
}
