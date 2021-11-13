import { CorporationEinEntity } from '../entities/corporation-ein.entity';

import { Injectable } from '@nestjs/common';
import { CorporationEinResponse } from '../graphql/dto/responses/corporation-ein.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateCorporationEinInput } from '../graphql/dto/inputs/create-corporation-ein.input';

@Injectable()
export class CorporationEinMapper implements BaseMapper<CorporationEinEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateCorporationEinInput>(dto: CreateCorporationEinInput): CorporationEinEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = CorporationEinResponse>(dto: CorporationEinResponse): CorporationEinEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: CorporationEinEntity): CorporationEinResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
