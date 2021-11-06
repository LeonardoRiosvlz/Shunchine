import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFfmpgOptionCommand extends DeleteManyCommand<FfmpgOptionEntity>{
  constructor(public request: GetOneDto<FfmpgOptionEntity>) {
    super(request)
  }
}
