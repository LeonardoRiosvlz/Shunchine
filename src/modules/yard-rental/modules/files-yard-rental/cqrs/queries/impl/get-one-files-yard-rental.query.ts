import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesYardRentalQuery extends GetOneQuery<FilesYardRentalEntity>{
  constructor(public request: GetOneDto<FilesYardRentalEntity>) {
    super(request)
  }
}
