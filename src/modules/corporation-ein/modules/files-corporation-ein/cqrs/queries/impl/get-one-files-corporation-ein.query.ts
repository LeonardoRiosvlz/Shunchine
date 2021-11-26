import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesCorporationEinQuery extends GetOneQuery<FilesCorporationEinEntity>{
  constructor(public request: GetOneDto<FilesCorporationEinEntity>) {
    super(request)
  }
}
