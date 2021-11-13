import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';

export class UpdateCorporationEinCommand extends UpdateCommand<CorporationEinEntity> {
  constructor(public entityId: string, update: Partial<CorporationEinEntity>) {
    super({entityId, update});
  }
}
