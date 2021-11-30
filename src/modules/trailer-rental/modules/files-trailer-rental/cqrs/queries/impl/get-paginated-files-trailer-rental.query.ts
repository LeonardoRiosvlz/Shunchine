import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesTrailerRentalQuery extends GetPaginatedQuery<FilesTrailerRentalEntity>{
  constructor(public request: GetPaginatedDto<FilesTrailerRentalEntity>) {
    super(request)
  }
}
