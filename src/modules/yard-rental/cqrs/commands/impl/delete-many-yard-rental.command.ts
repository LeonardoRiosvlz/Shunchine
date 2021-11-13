import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { YardRentalEntity } from '../../../entities/yard-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyYardRentalCommand extends DeleteManyCommand<YardRentalEntity>{
  constructor(public request: GetOneDto<YardRentalEntity>) {
    super(request)
  }
}
