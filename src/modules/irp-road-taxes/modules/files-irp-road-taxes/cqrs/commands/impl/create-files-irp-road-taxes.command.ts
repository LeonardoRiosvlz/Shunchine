import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';

export class CreateFilesIrpRoadTaxesCommand extends CreateCommand<FilesIrpRoadTaxesEntity> {
  constructor(public request: FilesIrpRoadTaxesEntity) {
    super(request);
  }
}
