import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFfmpgTemplateQuery extends GetPaginatedQuery<FfmpgTemplateEntity>{
  constructor(public request: GetPaginatedDto<FfmpgTemplateEntity>) {
    super(request)
  }
}
