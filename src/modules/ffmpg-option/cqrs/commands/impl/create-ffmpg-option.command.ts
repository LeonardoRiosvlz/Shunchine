import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';

export class CreateFfmpgOptionCommand extends CreateCommand<FfmpgOptionEntity> {
  constructor(public request: FfmpgOptionEntity) {
    super(request);
  }
}
