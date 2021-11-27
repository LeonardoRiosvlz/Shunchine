import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesDotInfoQuery extends GetAllQuery<FilesDotInfoEntity>{
  constructor(public request: GetAllDto<FilesDotInfoEntity>) {
    super(request)
  }
}
