import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllTrailerRentalQuery extends GetAllQuery<TrailerRentalEntity>{
  constructor(public request: GetAllDto<TrailerRentalEntity>) {
    super(request)
  }
}
