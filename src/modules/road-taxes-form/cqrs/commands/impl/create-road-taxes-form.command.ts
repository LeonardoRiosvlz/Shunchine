import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';

export class CreateRoadTaxesFormCommand extends CreateCommand<RoadTaxesFormEntity> {
  constructor(public request: RoadTaxesFormEntity) {
    super(request);
  }
}
