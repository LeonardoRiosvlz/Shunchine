import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFinancedEquipmentQuery extends GetOneQuery<FinancedEquipmentEntity>{
  constructor(public request: GetOneDto<FinancedEquipmentEntity>) {
    super(request)
  }
}
