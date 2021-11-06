import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFfmpgTemplateQuery extends GetAllQuery<FfmpgTemplateEntity>{
  constructor(public request: GetAllDto<FfmpgTemplateEntity>) {
    super(request)
  }
}
