import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';

export class UpdateFinancedEquipmentCommand extends UpdateCommand<FinancedEquipmentEntity> {
  constructor(public entityId: string, update: Partial<FinancedEquipmentEntity>) {
    super({entityId, update});
  }
}
