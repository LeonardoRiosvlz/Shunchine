import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesYardRentalQuery extends GetPaginatedQuery<FilesYardRentalEntity>{
  constructor(public request: GetPaginatedDto<FilesYardRentalEntity>) {
    super(request)
  }
}
