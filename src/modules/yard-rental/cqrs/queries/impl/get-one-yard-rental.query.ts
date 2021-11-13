import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneYardRentalQuery extends GetOneQuery<YardRentalEntity>{
  constructor(public request: GetOneDto<YardRentalEntity>) {
    super(request)
  }
}
