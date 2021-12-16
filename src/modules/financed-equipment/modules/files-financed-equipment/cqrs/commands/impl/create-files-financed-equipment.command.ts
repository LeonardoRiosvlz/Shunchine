import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';

export class CreateFilesFinancedEquipmentCommand extends CreateCommand<FilesFinancedEquipmentEntity> {
  constructor(public request: FilesFinancedEquipmentEntity) {
    super(request);
  }
}
