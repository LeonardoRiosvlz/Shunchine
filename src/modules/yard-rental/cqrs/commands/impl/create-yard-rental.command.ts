import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';

export class CreateYardRentalCommand extends CreateCommand<YardRentalEntity> {
  constructor(public request: YardRentalEntity) {
    super(request);
  }
}
