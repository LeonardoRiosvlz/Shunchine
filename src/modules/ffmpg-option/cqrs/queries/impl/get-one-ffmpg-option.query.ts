import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFfmpgOptionQuery extends GetOneQuery<FfmpgOptionEntity>{
  constructor(public request: GetOneDto<FfmpgOptionEntity>) {
    super(request)
  }
}
