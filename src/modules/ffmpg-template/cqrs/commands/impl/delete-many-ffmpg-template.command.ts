import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFfmpgTemplateCommand extends DeleteManyCommand<FfmpgTemplateEntity>{
  constructor(public request: GetOneDto<FfmpgTemplateEntity>) {
    super(request)
  }
}
