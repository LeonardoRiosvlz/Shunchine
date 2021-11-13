import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneIftaFuelTaxesQuery extends GetOneQuery<IftaFuelTaxesEntity>{
  constructor(public request: GetOneDto<IftaFuelTaxesEntity>) {
    super(request)
  }
}
