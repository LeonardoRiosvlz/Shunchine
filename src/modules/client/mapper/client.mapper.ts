import { ClientEntity } from '../entities/client.entity';

import { Injectable } from '@nestjs/common';
import { ClientResponse } from '../graphql/dto/responses/client.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateClientInput } from '../graphql/dto/inputs/create-client.input';

@Injectable()
export class ClientMapper implements BaseMapper<ClientEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateClientInput>(dto: CreateClientInput): ClientEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ClientResponse>(dto: ClientResponse): ClientEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ClientEntity): ClientResponse {
    return {
      ...persistentEntity
    };
  }

}
