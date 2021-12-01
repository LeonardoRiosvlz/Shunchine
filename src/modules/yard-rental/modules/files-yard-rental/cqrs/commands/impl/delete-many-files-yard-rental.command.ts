import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesYardRentalCommand extends DeleteManyCommand<FilesYardRentalEntity>{
  constructor(public request: GetOneDto<FilesYardRentalEntity>) {
    super(request)
  }
}
