import { YardRentalEntity } from '../entities/yard-rental.entity';

import { Injectable } from '@nestjs/common';
import { YardRentalResponse } from '../graphql/dto/responses/yard-rental.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateYardRentalInput } from '../graphql/dto/inputs/create-yard-rental.input';

@Injectable()
export class YardRentalMapper implements BaseMapper<YardRentalEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateYardRentalInput>(dto: CreateYardRentalInput): YardRentalEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = YardRentalResponse>(dto: YardRentalResponse): YardRentalEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: YardRentalEntity): YardRentalResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
