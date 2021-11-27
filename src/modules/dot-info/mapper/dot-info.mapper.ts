import { DotInfoEntity } from '../entities/dot-info.entity';

import { Injectable } from '@nestjs/common';
import { DotInfoResponse } from '../graphql/dto/responses/dot-info.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDotInfoInput } from '../graphql/dto/inputs/create-dot-info.input';

@Injectable()
export class DotInfoMapper implements BaseMapper<DotInfoEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDotInfoInput>(dto: CreateDotInfoInput): DotInfoEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DotInfoResponse>(dto: DotInfoResponse): DotInfoEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DotInfoEntity): DotInfoResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
