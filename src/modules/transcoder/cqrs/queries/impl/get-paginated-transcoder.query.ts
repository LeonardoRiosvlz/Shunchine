import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedTranscoderQuery extends GetPaginatedQuery<TranscoderEntity>{
  constructor(public request: GetPaginatedDto<TranscoderEntity>) {
    super(request)
  }
}
