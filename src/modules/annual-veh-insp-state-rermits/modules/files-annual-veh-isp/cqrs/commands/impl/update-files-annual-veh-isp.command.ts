import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';

export class UpdateFilesAnnualVehIspCommand extends UpdateCommand<FilesAnnualVehIspEntity> {
  constructor(public entityId: string, update: Partial<FilesAnnualVehIspEntity>) {
    super({entityId, update});
  }
}
