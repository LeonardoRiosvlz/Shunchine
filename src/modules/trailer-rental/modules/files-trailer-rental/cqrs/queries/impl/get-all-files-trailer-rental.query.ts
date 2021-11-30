import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesTrailerRentalEntity } from '../../../entities/files-trailer-rental.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesTrailerRentalQuery extends GetAllQuery<FilesTrailerRentalEntity>{
  constructor(public request: GetAllDto<FilesTrailerRentalEntity>) {
    super(request)
  }
}
