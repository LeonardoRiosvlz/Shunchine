import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesIftaFuelTaxesQuery extends GetOneQuery<FilesIftaFuelTaxesEntity>{
  constructor(public request: GetOneDto<FilesIftaFuelTaxesEntity>) {
    super(request)
  }
}
