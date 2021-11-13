import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedIrpRoadTaxesQuery extends GetPaginatedQuery<IrpRoadTaxesEntity>{
  constructor(public request: GetPaginatedDto<IrpRoadTaxesEntity>) {
    super(request)
  }
}
