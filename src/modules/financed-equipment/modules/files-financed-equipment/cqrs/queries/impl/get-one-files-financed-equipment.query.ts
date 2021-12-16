import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesFinancedEquipmentQuery extends GetOneQuery<FilesFinancedEquipmentEntity>{
  constructor(public request: GetOneDto<FilesFinancedEquipmentEntity>) {
    super(request)
  }
}
