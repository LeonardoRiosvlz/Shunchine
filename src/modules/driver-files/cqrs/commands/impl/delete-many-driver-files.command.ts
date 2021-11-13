import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDriverFilesCommand extends DeleteManyCommand<DriverFilesEntity>{
  constructor(public request: GetOneDto<DriverFilesEntity>) {
    super(request)
  }
}
