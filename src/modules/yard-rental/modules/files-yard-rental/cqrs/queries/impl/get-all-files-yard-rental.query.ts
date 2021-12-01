import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesYardRentalQuery extends GetAllQuery<FilesYardRentalEntity>{
  constructor(public request: GetAllDto<FilesYardRentalEntity>) {
    super(request)
  }
}
