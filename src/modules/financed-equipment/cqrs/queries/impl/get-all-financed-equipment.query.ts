import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFinancedEquipmentQuery extends GetAllQuery<FinancedEquipmentEntity>{
  constructor(public request: GetAllDto<FinancedEquipmentEntity>) {
    super(request)
  }
}
