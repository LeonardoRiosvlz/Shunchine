import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesCorporationEinQuery extends GetAllQuery<FilesCorporationEinEntity>{
  constructor(public request: GetAllDto<FilesCorporationEinEntity>) {
    super(request)
  }
}
