import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesFinancedEquipmentQuery extends GetAllQuery<FilesFinancedEquipmentEntity>{
  constructor(public request: GetAllDto<FilesFinancedEquipmentEntity>) {
    super(request)
  }
}
