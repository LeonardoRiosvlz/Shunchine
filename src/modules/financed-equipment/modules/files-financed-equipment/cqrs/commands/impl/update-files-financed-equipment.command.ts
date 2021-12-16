import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';

export class UpdateFilesFinancedEquipmentCommand extends UpdateCommand<FilesFinancedEquipmentEntity> {
  constructor(public entityId: string, update: Partial<FilesFinancedEquipmentEntity>) {
    super({entityId, update});
  }
}
