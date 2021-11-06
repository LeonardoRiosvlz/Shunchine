import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllTranscoderQuery extends GetAllQuery<TranscoderEntity>{
  constructor(public request: GetAllDto<TranscoderEntity>) {
    super(request)
  }
}
