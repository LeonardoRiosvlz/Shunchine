import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';

export class UpdateFfmpgTemplateCommand extends UpdateCommand<FfmpgTemplateEntity> {
  constructor(public entityId: string, update: Partial<FfmpgTemplateEntity>) {
    super({entityId, update});
  }
}
