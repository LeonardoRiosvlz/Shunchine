import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFfmpgTemplateQuery extends GetOneQuery<FfmpgTemplateEntity>{
  constructor(public request: GetOneDto<FfmpgTemplateEntity>) {
    super(request)
  }
}
