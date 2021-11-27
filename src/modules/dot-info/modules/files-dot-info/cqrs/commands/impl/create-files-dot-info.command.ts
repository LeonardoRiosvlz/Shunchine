import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';

export class CreateFilesDotInfoCommand extends CreateCommand<FilesDotInfoEntity> {
  constructor(public request: FilesDotInfoEntity) {
    super(request);
  }
}
