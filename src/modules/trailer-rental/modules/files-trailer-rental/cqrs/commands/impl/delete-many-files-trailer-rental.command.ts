import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesTrailerRentalCommand extends DeleteManyCommand<FilesTrailerRentalEntity>{
  constructor(public request: GetOneDto<FilesTrailerRentalEntity>) {
    super(request)
  }
}
