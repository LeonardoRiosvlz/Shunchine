import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';

export class UpdateYardRentalCommand extends UpdateCommand<YardRentalEntity> {
  constructor(public entityId: string, update: Partial<YardRentalEntity>) {
    super({entityId, update});
  }
}
