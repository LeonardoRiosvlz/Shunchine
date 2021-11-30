import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';

export class CreateFilesTrailerRentalCommand extends CreateCommand<FilesTrailerRentalEntity> {
  constructor(public request: FilesTrailerRentalEntity) {
    super(request);
  }
}
