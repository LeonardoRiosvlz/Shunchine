import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';

export class CreateFfmpgTemplateCommand extends CreateCommand<FfmpgTemplateEntity> {
  constructor(public request: FfmpgTemplateEntity) {
    super(request);
  }
}
