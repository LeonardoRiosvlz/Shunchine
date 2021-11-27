import { FilesDotInfoEntity } from '../entities/files-dot-info.entity';

import { Injectable } from '@nestjs/common';
import { FilesDotInfoResponse } from '../graphql/dto/responses/files-dot-info.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesDotInfoInput } from '../graphql/dto/inputs/create-files-dot-info.input';

@Injectable()
export class FilesDotInfoMapper implements BaseMapper<FilesDotInfoEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesDotInfoInput>(dto: CreateFilesDotInfoInput): FilesDotInfoEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesDotInfoResponse>(dto: FilesDotInfoResponse): FilesDotInfoEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesDotInfoEntity): FilesDotInfoResponse {
    return {
      ...persistentEntity,
      dotInfo: persistentEntity?.dotInfo ? { id: persistentEntity.dotInfo } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
