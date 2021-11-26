import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesIrpRoadTaxesQuery extends GetAllQuery<FilesIrpRoadTaxesEntity>{
  constructor(public request: GetAllDto<FilesIrpRoadTaxesEntity>) {
    super(request)
  }
}
