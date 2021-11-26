import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesIftaFuelTaxesQuery extends GetAllQuery<FilesIftaFuelTaxesEntity>{
  constructor(public request: GetAllDto<FilesIftaFuelTaxesEntity>) {
    super(request)
  }
}
