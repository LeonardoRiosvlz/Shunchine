import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesAnnualVehIspCommand extends DeleteManyCommand<FilesAnnualVehIspEntity>{
  constructor(public request: GetOneDto<FilesAnnualVehIspEntity>) {
    super(request)
  }
}
