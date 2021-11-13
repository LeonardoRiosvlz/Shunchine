import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';

export class CreateCorporationEinCommand extends CreateCommand<CorporationEinEntity> {
  constructor(public request: CorporationEinEntity) {
    super(request);
  }
}
