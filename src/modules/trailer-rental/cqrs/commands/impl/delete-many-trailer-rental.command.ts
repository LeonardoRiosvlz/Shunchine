import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { TrailerRentalEntity } from '../../../entities/trailer-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyTrailerRentalCommand extends DeleteManyCommand<TrailerRentalEntity>{
  constructor(public request: GetOneDto<TrailerRentalEntity>) {
    super(request)
  }
}
