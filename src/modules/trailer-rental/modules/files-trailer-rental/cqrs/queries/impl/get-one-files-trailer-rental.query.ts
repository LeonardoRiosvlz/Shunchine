import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesTrailerRentalQuery extends GetOneQuery<FilesTrailerRentalEntity>{
  constructor(public request: GetOneDto<FilesTrailerRentalEntity>) {
    super(request)
  }
}
