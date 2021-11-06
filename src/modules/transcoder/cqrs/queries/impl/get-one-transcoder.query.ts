import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneTranscoderQuery extends GetOneQuery<TranscoderEntity>{
  constructor(public request: GetOneDto<TranscoderEntity>) {
    super(request)
  }
}
