import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedIftaFuelTaxesQuery extends GetPaginatedQuery<IftaFuelTaxesEntity>{
  constructor(public request: GetPaginatedDto<IftaFuelTaxesEntity>) {
    super(request)
  }
}
