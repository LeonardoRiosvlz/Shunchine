import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneIrpRoadTaxesQuery extends GetOneQuery<IrpRoadTaxesEntity>{
  constructor(public request: GetOneDto<IrpRoadTaxesEntity>) {
    super(request)
  }
}
