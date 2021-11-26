import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesIrpRoadTaxesQuery extends GetPaginatedQuery<FilesIrpRoadTaxesEntity>{
  constructor(public request: GetPaginatedDto<FilesIrpRoadTaxesEntity>) {
    super(request)
  }
}
