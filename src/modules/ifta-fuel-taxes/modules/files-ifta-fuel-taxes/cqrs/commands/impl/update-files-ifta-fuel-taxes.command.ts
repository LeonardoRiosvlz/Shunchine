import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';

export class UpdateFilesIftaFuelTaxesCommand extends UpdateCommand<FilesIftaFuelTaxesEntity> {
  constructor(public entityId: string, update: Partial<FilesIftaFuelTaxesEntity>) {
    super({entityId, update});
  }
}
