import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesIftaFuelTaxesQuery extends GetPaginatedQuery<FilesIftaFuelTaxesEntity>{
  constructor(public request: GetPaginatedDto<FilesIftaFuelTaxesEntity>) {
    super(request)
  }
}
