import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesAnnualVehIspQuery extends GetOneQuery<FilesAnnualVehIspEntity>{
  constructor(public request: GetOneDto<FilesAnnualVehIspEntity>) {
    super(request)
  }
}
