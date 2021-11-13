import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneTrailerRentalQuery extends GetOneQuery<TrailerRentalEntity>{
  constructor(public request: GetOneDto<TrailerRentalEntity>) {
    super(request)
  }
}
