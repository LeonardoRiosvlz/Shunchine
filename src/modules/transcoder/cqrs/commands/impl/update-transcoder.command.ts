import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { TranscoderEntity } from '../../../entities/transcoder.entity';

export class UpdateTranscoderCommand extends UpdateCommand<TranscoderEntity> {
  constructor(public entityId: string, update: Partial<TranscoderEntity>) {
    super({entityId, update});
  }
}
