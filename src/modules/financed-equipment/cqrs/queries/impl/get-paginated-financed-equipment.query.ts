import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFinancedEquipmentQuery extends GetPaginatedQuery<FinancedEquipmentEntity>{
  constructor(public request: GetPaginatedDto<FinancedEquipmentEntity>) {
    super(request)
  }
}
