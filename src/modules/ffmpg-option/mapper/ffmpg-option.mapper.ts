import { FfmpgOptionEntity } from '../entities/ffmpg-option.entity';

import { Injectable } from '@nestjs/common';
import { FfmpgOptionResponse } from '../graphql/dto/responses/ffmpg-option.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFfmpgOptionInput } from '../graphql/dto/inputs/create-ffmpg-option.input';

@Injectable()
export class FfmpgOptionMapper implements BaseMapper<FfmpgOptionEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFfmpgOptionInput>(dto: CreateFfmpgOptionInput): FfmpgOptionEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FfmpgOptionResponse>(dto: FfmpgOptionResponse): FfmpgOptionEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FfmpgOptionEntity): FfmpgOptionResponse {
    return {
      ...persistentEntity,
    };
  }

}
