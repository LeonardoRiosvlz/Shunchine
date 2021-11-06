import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFfmpgOptionQuery extends GetAllQuery<FfmpgOptionEntity>{
  constructor(public request: GetAllDto<FfmpgOptionEntity>) {
    super(request)
  }
}
