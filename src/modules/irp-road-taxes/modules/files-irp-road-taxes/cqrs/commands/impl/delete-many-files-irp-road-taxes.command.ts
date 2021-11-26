import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesIrpRoadTaxesCommand extends DeleteManyCommand<FilesIrpRoadTaxesEntity>{
  constructor(public request: GetOneDto<FilesIrpRoadTaxesEntity>) {
    super(request)
  }
}
