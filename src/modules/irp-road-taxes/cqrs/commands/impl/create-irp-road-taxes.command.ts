import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';

export class CreateIrpRoadTaxesCommand extends CreateCommand<IrpRoadTaxesEntity> {
  constructor(public request: IrpRoadTaxesEntity) {
    super(request);
  }
}
