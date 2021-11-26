import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesIftaFuelTaxesCommand extends DeleteManyCommand<FilesIftaFuelTaxesEntity>{
  constructor(public request: GetOneDto<FilesIftaFuelTaxesEntity>) {
    super(request)
  }
}
