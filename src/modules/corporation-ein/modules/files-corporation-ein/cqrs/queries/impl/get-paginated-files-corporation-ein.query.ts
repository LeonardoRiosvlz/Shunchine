import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesCorporationEinQuery extends GetPaginatedQuery<FilesCorporationEinEntity>{
  constructor(public request: GetPaginatedDto<FilesCorporationEinEntity>) {
    super(request)
  }
}
