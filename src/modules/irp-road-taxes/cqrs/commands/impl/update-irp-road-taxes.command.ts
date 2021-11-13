import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';

export class UpdateIrpRoadTaxesCommand extends UpdateCommand<IrpRoadTaxesEntity> {
  constructor(public entityId: string, update: Partial<IrpRoadTaxesEntity>) {
    super({entityId, update});
  }
}
