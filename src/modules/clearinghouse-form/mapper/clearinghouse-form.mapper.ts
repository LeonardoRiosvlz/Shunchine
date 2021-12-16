import { ClearinghouseFormEntity } from '../entities/clearinghouse-form.entity';

import { Injectable } from '@nestjs/common';
import { ClearinghouseFormResponse } from '../graphql/dto/responses/clearinghouse-form.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateClearinghouseFormInput } from '../graphql/dto/inputs/create-clearinghouse-form.input';

@Injectable()
export class ClearinghouseFormMapper implements BaseMapper<ClearinghouseFormEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateClearinghouseFormInput>(dto: CreateClearinghouseFormInput): ClearinghouseFormEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ClearinghouseFormResponse>(dto: ClearinghouseFormResponse): ClearinghouseFormEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ClearinghouseFormEntity): ClearinghouseFormResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
