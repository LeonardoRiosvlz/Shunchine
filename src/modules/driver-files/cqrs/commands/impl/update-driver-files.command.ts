import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';

export class UpdateDriverFilesCommand extends UpdateCommand<DriverFilesEntity> {
  constructor(public entityId: string, update: Partial<DriverFilesEntity>) {
    super({entityId, update});
  }
}
