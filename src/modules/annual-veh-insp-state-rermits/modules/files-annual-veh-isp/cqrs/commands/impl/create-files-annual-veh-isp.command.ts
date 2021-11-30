import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';

export class CreateFilesAnnualVehIspCommand extends CreateCommand<FilesAnnualVehIspEntity> {
  constructor(public request: FilesAnnualVehIspEntity) {
    super(request);
  }
}
