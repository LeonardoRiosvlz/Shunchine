import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';

export class UpdateFfmpgOptionCommand extends UpdateCommand<FfmpgOptionEntity> {
  constructor(public entityId: string, update: Partial<FfmpgOptionEntity>) {
    super({entityId, update});
  }
}
