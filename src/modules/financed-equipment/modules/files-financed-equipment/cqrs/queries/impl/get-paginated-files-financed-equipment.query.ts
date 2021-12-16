import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesFinancedEquipmentEntity } from '../../../entities/files-financed-equipment.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesFinancedEquipmentQuery extends GetPaginatedQuery<FilesFinancedEquipmentEntity>{
  constructor(public request: GetPaginatedDto<FilesFinancedEquipmentEntity>) {
    super(request)
  }
}
