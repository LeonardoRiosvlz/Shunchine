import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllIftaFuelTaxesQuery extends GetAllQuery<IftaFuelTaxesEntity>{
  constructor(public request: GetAllDto<IftaFuelTaxesEntity>) {
    super(request)
  }
}
