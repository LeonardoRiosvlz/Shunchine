import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDriverFilesQuery extends GetOneQuery<DriverFilesEntity>{
  constructor(public request: GetOneDto<DriverFilesEntity>) {
    super(request)
  }
}
