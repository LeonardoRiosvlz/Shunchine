import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';

export class UpdateFilesDotInfoCommand extends UpdateCommand<FilesDotInfoEntity> {
  constructor(public entityId: string, update: Partial<FilesDotInfoEntity>) {
    super({entityId, update});
  }
}
