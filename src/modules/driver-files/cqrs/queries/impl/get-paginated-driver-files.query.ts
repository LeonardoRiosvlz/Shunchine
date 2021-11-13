import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDriverFilesQuery extends GetPaginatedQuery<DriverFilesEntity>{
  constructor(public request: GetPaginatedDto<DriverFilesEntity>) {
    super(request)
  }
}
