import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesCorporationEinCommand extends DeleteManyCommand<FilesCorporationEinEntity>{
  constructor(public request: GetOneDto<FilesCorporationEinEntity>) {
    super(request)
  }
}
