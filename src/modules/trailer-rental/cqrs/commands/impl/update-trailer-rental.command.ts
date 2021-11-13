import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';

export class UpdateTrailerRentalCommand extends UpdateCommand<TrailerRentalEntity> {
  constructor(public entityId: string, update: Partial<TrailerRentalEntity>) {
    super({entityId, update});
  }
}
