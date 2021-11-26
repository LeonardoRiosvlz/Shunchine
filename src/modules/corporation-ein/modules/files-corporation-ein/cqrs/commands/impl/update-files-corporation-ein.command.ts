import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';

export class UpdateFilesCorporationEinCommand extends UpdateCommand<FilesCorporationEinEntity> {
  constructor(public entityId: string, update: Partial<FilesCorporationEinEntity>) {
    super({entityId, update});
  }
}
