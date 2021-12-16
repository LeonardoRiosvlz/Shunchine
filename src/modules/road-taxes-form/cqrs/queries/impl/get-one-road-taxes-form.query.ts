import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneRoadTaxesFormQuery extends GetOneQuery<RoadTaxesFormEntity>{
  constructor(public request: GetOneDto<RoadTaxesFormEntity>) {
    super(request)
  }
}
