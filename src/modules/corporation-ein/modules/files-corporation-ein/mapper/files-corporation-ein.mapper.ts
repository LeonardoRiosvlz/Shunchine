import { FilesCorporationEinEntity } from '../entities/files-corporation-ein.entity';

import { Injectable } from '@nestjs/common';
import { FilesCorporationEinResponse } from '../graphql/dto/responses/files-corporation-ein.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesCorporationEinInput } from '../graphql/dto/inputs/create-files-corporation-ein.input';

@Injectable()
export class FilesCorporationEinMapper implements BaseMapper<FilesCorporationEinEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesCorporationEinInput>(dto: CreateFilesCorporationEinInput): FilesCorporationEinEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesCorporationEinResponse>(dto: FilesCorporationEinResponse): FilesCorporationEinEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesCorporationEinEntity): FilesCorporationEinResponse {
    return {
      ...persistentEntity,
      corporationEin: persistentEntity?.corporationEin ? { id: persistentEntity.corporationEin } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
