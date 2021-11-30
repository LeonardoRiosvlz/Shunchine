import { TrailerRentalEntity } from '../entities/trailer-rental.entity';

import { Injectable } from '@nestjs/common';
import { TrailerRentalResponse } from '../graphql/dto/responses/trailer-rental.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateTrailerRentalInput } from '../graphql/dto/inputs/create-trailer-rental.input';

@Injectable()
export class TrailerRentalMapper implements BaseMapper<TrailerRentalEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateTrailerRentalInput>(dto: CreateTrailerRentalInput): TrailerRentalEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = TrailerRentalResponse>(dto: TrailerRentalResponse): TrailerRentalEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: TrailerRentalEntity): TrailerRentalResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
