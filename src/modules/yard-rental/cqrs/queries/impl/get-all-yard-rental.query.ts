import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllYardRentalQuery extends GetAllQuery<YardRentalEntity>{
  constructor(public request: GetAllDto<YardRentalEntity>) {
    super(request)
  }
}
