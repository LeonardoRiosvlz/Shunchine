import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesAnnualVehIspQuery extends GetPaginatedQuery<FilesAnnualVehIspEntity>{
  constructor(public request: GetPaginatedDto<FilesAnnualVehIspEntity>) {
    super(request)
  }
}
