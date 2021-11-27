import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesDotInfoCommand extends DeleteManyCommand<FilesDotInfoEntity>{
  constructor(public request: GetOneDto<FilesDotInfoEntity>) {
    super(request)
  }
}
