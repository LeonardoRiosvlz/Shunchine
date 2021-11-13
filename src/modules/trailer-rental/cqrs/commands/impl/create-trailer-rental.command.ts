import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';

export class CreateTrailerRentalCommand extends CreateCommand<TrailerRentalEntity> {
  constructor(public request: TrailerRentalEntity) {
    super(request);
  }
}
