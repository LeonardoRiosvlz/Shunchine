import { RoadTaxesFormEntity } from '../entities/road-taxes-form.entity';

import { Injectable } from '@nestjs/common';
import { RoadTaxesFormResponse } from '../graphql/dto/responses/road-taxes-form.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateRoadTaxesFormInput } from '../graphql/dto/inputs/create-road-taxes-form.input';

@Injectable()
export class RoadTaxesFormMapper implements BaseMapper<RoadTaxesFormEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateRoadTaxesFormInput>(dto: CreateRoadTaxesFormInput): RoadTaxesFormEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = RoadTaxesFormResponse>(dto: RoadTaxesFormResponse): RoadTaxesFormEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: RoadTaxesFormEntity): RoadTaxesFormResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
