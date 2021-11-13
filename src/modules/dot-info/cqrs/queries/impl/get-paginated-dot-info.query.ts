import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDotInfoQuery extends GetPaginatedQuery<DotInfoEntity>{
  constructor(public request: GetPaginatedDto<DotInfoEntity>) {
    super(request)
  }
}
