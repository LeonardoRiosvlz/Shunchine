import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';

export class CreateFilesCorporationEinCommand extends CreateCommand<FilesCorporationEinEntity> {
  constructor(public request: FilesCorporationEinEntity) {
    super(request);
  }
}
