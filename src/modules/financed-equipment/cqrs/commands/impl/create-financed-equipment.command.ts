import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';

export class CreateFinancedEquipmentCommand extends CreateCommand<FinancedEquipmentEntity> {
  constructor(public request: FinancedEquipmentEntity) {
    super(request);
  }
}
