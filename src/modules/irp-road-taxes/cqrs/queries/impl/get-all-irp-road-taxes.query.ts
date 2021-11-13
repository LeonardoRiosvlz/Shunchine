import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllIrpRoadTaxesQuery extends GetAllQuery<IrpRoadTaxesEntity>{
  constructor(public request: GetAllDto<IrpRoadTaxesEntity>) {
    super(request)
  }
}
