import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DotInfoEntity } from '../../../entities/dot-info.entity';

export class UpdateDotInfoCommand extends UpdateCommand<DotInfoEntity> {
  constructor(public entityId: string, update: Partial<DotInfoEntity>) {
    super({entityId, update});
  }
}
