import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DotInfoEntity } from '../../../entities/dot-info.entity';

export class CreateDotInfoCommand extends CreateCommand<DotInfoEntity> {
  constructor(public request: DotInfoEntity) {
    super(request);
  }
}
