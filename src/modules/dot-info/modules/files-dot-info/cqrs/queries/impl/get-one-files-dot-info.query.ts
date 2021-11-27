import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesDotInfoQuery extends GetOneQuery<FilesDotInfoEntity>{
  constructor(public request: GetOneDto<FilesDotInfoEntity>) {
    super(request)
  }
}
