import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { TranscoderEntity } from '../../../entities/transcoder.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyTranscoderCommand extends DeleteManyCommand<TranscoderEntity>{
  constructor(public request: GetOneDto<TranscoderEntity>) {
    super(request)
  }
}
