import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesFinancedEquipmentCommand extends DeleteManyCommand<FilesFinancedEquipmentEntity>{
  constructor(public request: GetOneDto<FilesFinancedEquipmentEntity>) {
    super(request)
  }
}
