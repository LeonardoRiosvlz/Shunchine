import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesDotInfoQuery extends GetPaginatedQuery<FilesDotInfoEntity>{
  constructor(public request: GetPaginatedDto<FilesDotInfoEntity>) {
    super(request)
  }
}
