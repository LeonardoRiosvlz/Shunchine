import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';

export class UpdateFilesIrpRoadTaxesCommand extends UpdateCommand<FilesIrpRoadTaxesEntity> {
  constructor(public entityId: string, update: Partial<FilesIrpRoadTaxesEntity>) {
    super({entityId, update});
  }
}
