import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFinancedEquipmentCommand extends DeleteManyCommand<FinancedEquipmentEntity>{
  constructor(public request: GetOneDto<FinancedEquipmentEntity>) {
    super(request)
  }
}
