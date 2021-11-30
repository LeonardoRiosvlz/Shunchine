import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';

export class UpdateFilesTrailerRentalCommand extends UpdateCommand<FilesTrailerRentalEntity> {
  constructor(public entityId: string, update: Partial<FilesTrailerRentalEntity>) {
    super({entityId, update});
  }
}
