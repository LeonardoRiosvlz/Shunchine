import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesIrpRoadTaxesQuery extends GetOneQuery<FilesIrpRoadTaxesEntity>{
  constructor(public request: GetOneDto<FilesIrpRoadTaxesEntity>) {
    super(request)
  }
}
