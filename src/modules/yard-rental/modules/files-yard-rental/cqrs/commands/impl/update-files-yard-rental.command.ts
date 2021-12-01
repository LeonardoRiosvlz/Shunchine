import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';

export class UpdateFilesYardRentalCommand extends UpdateCommand<FilesYardRentalEntity> {
  constructor(public entityId: string, update: Partial<FilesYardRentalEntity>) {
    super({entityId, update});
  }
}
