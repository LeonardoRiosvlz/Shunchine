import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesAnnualVehIspQuery extends GetAllQuery<FilesAnnualVehIspEntity>{
  constructor(public request: GetAllDto<FilesAnnualVehIspEntity>) {
    super(request)
  }
}
