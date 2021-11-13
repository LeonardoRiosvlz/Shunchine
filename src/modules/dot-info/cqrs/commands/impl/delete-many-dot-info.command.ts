import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDotInfoCommand extends DeleteManyCommand<DotInfoEntity>{
  constructor(public request: GetOneDto<DotInfoEntity>) {
    super(request)
  }
}
