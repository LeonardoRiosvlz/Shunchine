import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';

export class CreateDriverFilesCommand extends CreateCommand<DriverFilesEntity> {
  constructor(public request: DriverFilesEntity) {
    super(request);
  }
}
