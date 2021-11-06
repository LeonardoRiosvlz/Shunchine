import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { TranscoderEntity } from '../../../entities/transcoder.entity';

export class CreateTranscoderCommand extends CreateCommand<TranscoderEntity> {
  constructor(public request: TranscoderEntity) {
    super(request);
  }
}
