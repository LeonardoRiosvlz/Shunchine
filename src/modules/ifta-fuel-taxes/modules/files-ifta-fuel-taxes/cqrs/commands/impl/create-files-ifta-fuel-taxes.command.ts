import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';

export class CreateFilesIftaFuelTaxesCommand extends CreateCommand<FilesIftaFuelTaxesEntity> {
  constructor(public request: FilesIftaFuelTaxesEntity) {
    super(request);
  }
}
