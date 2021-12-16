import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllRoadTaxesFormQuery extends GetAllQuery<RoadTaxesFormEntity>{
  constructor(public request: GetAllDto<RoadTaxesFormEntity>) {
    super(request)
  }
}
