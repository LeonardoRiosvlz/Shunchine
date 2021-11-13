import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDriverFilesQuery extends GetAllQuery<DriverFilesEntity>{
  constructor(public request: GetAllDto<DriverFilesEntity>) {
    super(request)
  }
}
