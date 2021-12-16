import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';

export class UpdateRoadTaxesFormCommand extends UpdateCommand<RoadTaxesFormEntity> {
  constructor(public entityId: string, update: Partial<RoadTaxesFormEntity>) {
    super({entityId, update});
  }
}
