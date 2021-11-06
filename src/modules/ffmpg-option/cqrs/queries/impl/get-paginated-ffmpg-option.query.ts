import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFfmpgOptionQuery extends GetPaginatedQuery<FfmpgOptionEntity>{
  constructor(public request: GetPaginatedDto<FfmpgOptionEntity>) {
    super(request)
  }
}
