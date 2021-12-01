import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';

export class CreateFilesYardRentalCommand extends CreateCommand<FilesYardRentalEntity> {
  constructor(public request: FilesYardRentalEntity) {
    super(request);
  }
}
